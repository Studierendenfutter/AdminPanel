import postData from "./postData";
import config from "../../config";

const url = config.BACKEND_URL + "/userCategoryMealPrices";

export default async function postPrice(data) {
  try {
    const response = await postData(url, data);
    const { userCategoryMealPrice } = response.data;
    return userCategoryMealPrice;
  } catch (e) {
    return null;
  }
}
