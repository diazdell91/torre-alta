import { useState } from "react";

const useForm = (initalValues: { [prop: string]: string }) => {
  const [values, setValues] = useState(initalValues);

  const handleChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clear = () => {
    setValues(initalValues);
  };

  return {
    values,
    handleChange,
    clear,
  };
};

export default useForm;
