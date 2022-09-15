import getData from "./getData";
import config from "../../config";

export default async function getCanteenCrawlMeals(canteenId) {
  const url = config.BACKEND_URL + "/canteens/" + canteenId + "/crawlMeals";

  return await getData(url);
}
