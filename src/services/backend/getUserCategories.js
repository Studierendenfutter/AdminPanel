import getData from "./getData";
import config from "../../config";

const url = config.BACKEND_URL + "/userCategories";

export default async function getUserCategories() {
  const response = await getData(url);
  const userCategories = response;
  return userCategories;
}
