import Axios from "axios";
import getAdminHeaders from "../utils/getAdminHeaders";

export default async function postData(url, data) {
  const headers = getAdminHeaders();
  try {
    console.log(data);
    const response = await Axios.post(url, data, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return {};
  }
}
