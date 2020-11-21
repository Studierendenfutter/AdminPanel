import { useEffect, useState } from "react";
import fetchMealHasMealTypes from "../backend/fetchMealHasMealTypes";
import postMealHasMealType from "../backend/postMealHasMealType";
import deleteMealHasMealType from "../backend/deleteMealHasMealType";

export default function useMealHasMealTypes(id) {
  const [mealHasMealTypes, setMealHasMealTypes] = useState([]);

  async function fetchData() {
    const _mealHasMealTypes = await fetchMealHasMealTypes(id);
    setMealHasMealTypes(_mealHasMealTypes);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function createPrice(price) {
    await postMealHasMealType(price);
    await fetchData();
  }

  async function removePrice(priceId) {
    await deleteMealHasMealType(priceId);
    await fetchData();
  }

  return [mealHasMealTypes, createPrice, removePrice];
}
