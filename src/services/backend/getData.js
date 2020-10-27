import Axios from "axios";
import getAdminHeaders from "../utils/getAdminHeaders";

export default async function getData(url) {
  const headers = getAdminHeaders();
  try {
    const response = await Axios.get(url, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
