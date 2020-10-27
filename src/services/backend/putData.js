import Axios from "axios";
import getAdminHeaders from "../utils/getAdminHeaders";

export default async function putData(url, data) {
  const headers = getAdminHeaders();
  try {
    const response = await Axios.put(url, data, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
