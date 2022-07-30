import Axios from "axios";
import getAdminHeaders from "../utils/getAdminHeaders";
import logout from "../utils/logout_if_response_401";

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      logout();
    }
    return error;
  }
);

export default async function getData(url) {
  const headers = getAdminHeaders();
  try {
    const response = await Axios.get(url, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
