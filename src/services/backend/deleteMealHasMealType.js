import config from "../../config";
import deleteData from "./deleteData";

export default function deleteMealHasMealType(mealHasMealTypeId, code) {
  const url = config.BACKEND_URL + "/mealHasMealTypes/" + mealHasMealTypeId;
  return deleteData(url, { code });
}
