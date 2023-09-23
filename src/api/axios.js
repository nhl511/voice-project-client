import axios from "axios";
const BASE_URL = "https://voicespireexeapi.azurewebsites.net";

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosOne = axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getVoiceList = async (
  currentPage,
  PageSize,
  sortType,
  isApproved
) => {
  const response = await axiosOne.get(
    `/api/VoiceDetails/${currentPage},${PageSize},${sortType},${isApproved}/GetPage`
  );
  console.log(response.data.results);

  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getVoice = async (sellerId) => {
  const response = await axiosOne.get(`/api/VoiceDetails/${sellerId}`);

  // const valuesArray = Object.values(response.data);
  // return valuesArray;
  return response.data;
};
