import postData from "./postData";
import config from "../../config";

const url = config.BACKEND_URL + "/mealHasMealTypes";

export default async function postMealHasMealType(data) {
  try {
    console.log(data);
    const response = await postData(url, data);
    const { mealMealHasMealType } = response.data;
    return mealMealHasMealType;
  } catch (e) {
    return null;
  }
}
