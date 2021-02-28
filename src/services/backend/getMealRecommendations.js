import getData from "./getData";
import config from "../../config";

export default function getMealRecommendations() {
  const url = config.BACKEND_URL + "/mealRecommendations";
  return getData(url);
}
