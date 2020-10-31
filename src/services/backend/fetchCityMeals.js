import getData from "./getData";
import config from "../../config";

export default async function fetchCities(cityId) {
  const url = config.BACKEND_URL + "/cities/" + cityId + "/meals";
  try {
    const response = await getData(url);
    return response.meals;
  } catch (e) {
    return null;
  }
}
