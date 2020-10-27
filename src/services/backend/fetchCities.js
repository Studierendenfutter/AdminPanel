import getData from "./getData";
import config from "../../config";

const url = config.BACKEND_URL + "/cities";

export default async function fetchCities() {
  try {
    const response = await getData(url);
    return response.cities;
  } catch (e) {
    return null;
  }
}
