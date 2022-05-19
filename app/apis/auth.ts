import axios from "axios";

const BASE_URL = "https://torrealta.jumpintotech.es/rest/api/v1/";

interface Credential {
  email: string;
  pass: string;
}

type resp = {
  uid: string;
};

const authServices = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const signIn = async (credential: Credential) => {
  const url = `${BASE_URL}user/login`;
  let data;
  let error;
  try {
    const res = await axios.post<resp>(url, credential);
    data = res.data;
  } catch (err: any) {
    console.log("Axios Error", err);
    error = err.message;
  }
  return { data, error };
};

const logout = async () => {
  const url = `${BASE_URL}user/logout`;
  let data;
  let error;
  try {
    const res = await axios.post(url);
    data = res.data;
  } catch (err: any) {
    console.log("Axios Error on logOut", err);
    error = err.message;
  }
  return { data, error };
};

export { authServices, signIn, logout };
