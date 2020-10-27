import getData from "./getData";
import config from "../../config";

const url = config.BACKEND_URL + "/stats";

export default async function fetchStatistics() {
  try {
    const response = await getData(url);
    return response;
  } catch (e) {
    return null;
  }
}
