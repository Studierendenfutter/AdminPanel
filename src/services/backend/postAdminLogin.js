import Axios from "axios";

import config from "../../config";

const url = config.BACKEND_URL + "/auth/login";

export default async function postAdminLogin(data) {
  try {
    const response = await Axios.post(url, data);
    window.localStorage.setItem(
      "authToken",
      JSON.stringify({ token: response.data.token })
    );
  } catch (err) {
    console.log(err);
    return {};
  }
}
