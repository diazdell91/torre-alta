import { useState, useEffect } from "react";

function useAxios(): [
  axiosFetch: (configObj: any) => Promise<void>,
  data: any,
  loading: boolean,
  error: string
] {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); //different!
  const [controller, setController] = useState(new AbortController());

  const axiosFetch = async (configObj: any) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });

      setData(res.data);
      return res.data;
    } catch (err: any) {
      console.log("Axios Error", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return [axiosFetch, data, loading, error];
}

export default useAxios;
