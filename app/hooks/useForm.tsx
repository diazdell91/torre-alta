import { useState } from "react";

const useForm = (
  initalValues: any
): {
  values: typeof initalValues;
  handleChange: (name: string, value: string) => void;
  clear: () => void;
} => {
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

  return { values, handleChange, clear };
};

export default useForm;
