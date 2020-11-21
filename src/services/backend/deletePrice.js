import config from "../../config";
import deleteData from "./deleteData";

export default function deletePrice(priceId, code) {
  const url = config.BACKEND_URL + "/userCategoryMealPrices/" + priceId;
  return deleteData(url, { code });
}
