import axios from "axios";

const BASE_URL = "https://torrealta.jumpintotech.es/rest/api/v1/";

interface uploadVideo {
  ID: string;
  video: {
    filename: string;
    base64: string;
  };
}

const cattleServices = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const GET_CATTLE_LIST = `animales/listado`;
const GET_CATTLE_BY_ID = `animal/detalle/`;
const GET_CATTLE_CHILD_BY_ID = `animal/hijos/`;
const SELECT_CATTLE_TREE = `animal/arbol/`;
const GET_VIDEO = `video/filter?ID=`;
const SELECT_HAIR = `pelo/select`;
const SELECT_SEX = `sexo/select`;
const SELECT_CATTLE = `ganaderia/select`;
const SELECT_GROUP = `agrupacion/select`;
const SELECT_EXERCISE = `ejerciciofisico/select`;
const SELECT_STATE = `estado/select`;
const SELECT_PLACE = `lugar/select`;
const SELECT_FEED = `pienso/select`;
const SELECT_BULLF = `torero/select`;
const SELECT_BULLF_TROPHY = `trofeotorero/select`;
const SELECT_BULL_TROPHY = `trofeotoro/select`;
const SELECT_PLAZA = `plaza/select`;
const SELECT_DEST = `destino/select`;

const updateCattle = async (dataCattle: any) => {
  const url = `${BASE_URL}animal/editaranimal`;
  let data;
  let error;
  try {
    const res = await axios.post(url, dataCattle);
    data = res.data;
  } catch (err: any) {
    console.log("Axios updated Cattle", err);
    error = err.message;
  }
  return { data, error };
};

const uploadVideo = async (newVideo: uploadVideo) => {
  const url = `${BASE_URL}animal/addvideoanimal`;
  let data;
  let error;
  let percentCompleted = 0;
  try {
    const res = await axios.post(url, newVideo, {
      headers: {
        "Content-Type": "text/plain",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
      onUploadProgress: (progressEvent) => {
        percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        //console.log(percentCompleted);
      },
    });
    data = res.data;
  } catch (err: any) {
    console.log("Axios uploading video", err);
    error = err.message;
  }
  return { data, error, percentCompleted };
};

export {
  cattleServices,
  updateCattle,
  uploadVideo,
  GET_CATTLE_LIST,
  GET_CATTLE_BY_ID,
  GET_CATTLE_CHILD_BY_ID,
  SELECT_CATTLE_TREE,
  GET_VIDEO,
  SELECT_HAIR,
  SELECT_SEX,
  SELECT_CATTLE,
  SELECT_GROUP,
  SELECT_EXERCISE,
  SELECT_STATE,
  SELECT_PLACE,
  SELECT_FEED,
  SELECT_BULLF,
  SELECT_BULLF_TROPHY,
  SELECT_BULL_TROPHY,
  SELECT_PLAZA,
  SELECT_DEST,
};
