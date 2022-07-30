import Axios from "axios";
import getAdminHeaders from "../utils/getAdminHeaders";
import logout_if_response_401 from "../utils/logout_if_response_401";

export default async function getData(url) {
  const headers = getAdminHeaders();
  try {
    const response = await Axios.get(url, { headers });
    logout_if_response_401(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
