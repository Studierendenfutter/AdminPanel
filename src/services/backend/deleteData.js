import Axios from "axios";
import getAdminHeaders from "../utils/getAdminHeaders";

export default async function deleteData(url) {
  const headers = getAdminHeaders();
  try {
    const response = await Axios.delete(url, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
