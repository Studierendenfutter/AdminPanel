import postData from "./postData";
import config from "../../config";

const url = config.BACKEND_URL + "/meals";

export default async function postMeal(data) {
  try {
    const response = await postData(url, data);
    return response.meal;
  } catch (e) {
    return null;
  }
}
