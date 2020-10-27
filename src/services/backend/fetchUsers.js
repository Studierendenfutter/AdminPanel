import getData from "./getData";
import config from "../../config";

const url = config.BACKEND_URL + "/users";

export default async function fetchUsers() {
  try {
    const response = await getData(url);
    return response.users;
  } catch (e) {
    return null;
  }
}
