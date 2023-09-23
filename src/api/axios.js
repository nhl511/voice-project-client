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
  const valuesArray = Object.values(response.data);
  return valuesArray;
};
