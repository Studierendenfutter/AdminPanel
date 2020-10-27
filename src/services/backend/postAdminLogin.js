import postData from "./postData";
import config from "../../config";

const url = config.BACKEND_URL + "/auth/login";

export default async function postAdminLogin(data) {
  const response = await postData(url, data);

  const { token } = response.data;

  window.localStorage.setItem("authToken", JSON.stringify({ token }));
}
