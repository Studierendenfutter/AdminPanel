import config from "../../config";
import putData from "./putData";

export default function putCity(city) {
  const url = config.BACKEND_URL + "/cities/" + city.id;
  putData(url, city);
}
