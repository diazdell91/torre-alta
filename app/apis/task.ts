import axios from "axios";

const BASE_URL = "https://torrealta.jumpintotech.es/rest/api/v1/";

interface addTaskParams {
  titulo: string;
  tipo_tarea: string;
  fecha: string;
  asignado_a: { username: string }[];
  descripcion: string;
}

interface startTaskParams {
  id: string;
  nombre_tiempo: string;
}

interface pauseTaskParams {
  id: string;
}

interface endTaskParams {
  id: string;
}

const taskServices = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const GET_TASK_TYPE = `tipotarea/filter`;
const GET_TASK_GENERAL = `tarea/listadogenerales?username=`;
const GET_TASK_TODAY = `tarea/listadohoy?username=`;
const GET_TASK_PENDING = `tarea/listadosinterminar?username=`;
const GET_TASK_DESCRIPTION = `tarea/descripcion`;

const addTask = async (newTask: addTaskParams) => {
  const url = `${BASE_URL}tarea/add`;
  let data;
  let error;
  try {
    const res = await axios.post(url, newTask);
    data = res.data;
  } catch (err: any) {
    console.log("Axios add task Error", err);
    error = err.message;
  }
  return { data, error };
};

const startTask = async (task: startTaskParams) => {
  const url = `${BASE_URL}tarea/playtarea`;
  let data;
  let error;
  try {
    const res = await axios.post(url, task);
    data = res.data;
  } catch (err: any) {
    console.log("Axios start task Error", err);
    error = err.message;
  }
  return { data, error };
};

const pauseTask = async (task: pauseTaskParams) => {
  const url = `${BASE_URL}tarea/pausatarea`;
  let data;
  let error;
  try {
    const res = await axios.post(url, task);
    data = res.data;
  } catch (err: any) {
    console.log("Axios pause task Error", err);
    error = err.message;
  }
  return { data, error };
};

const endTask = async (task: endTaskParams) => {
  const url = `${BASE_URL}tarea/terminartarea`;
  let data;
  let error;
  try {
    const res = await axios.post(url, task);
    data = res.data;
  } catch (err: any) {
    console.log("Axios end task Error", err);
    error = err.message;
  }
  return { data, error };
};

export {
  taskServices,
  addTask,
  startTask,
  pauseTask,
  endTask,
  GET_TASK_GENERAL,
  GET_TASK_TYPE,
  GET_TASK_TODAY,
  GET_TASK_DESCRIPTION,
  GET_TASK_PENDING,
};
