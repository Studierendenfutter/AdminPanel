import config from "../../config";
import putData from "./putData";

export default function putMealRecommendation(mealRecommendation) {
  const url = config.BACKEND_URL + "/mealRecommendations/" + mealRecommendation.id;
  return putData(url, mealRecommendation);
}
