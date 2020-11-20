import { useEffect, useState } from "react";
import fetchMeal from "../backend/fetchMeal";

export default function useMeal(id) {
  const [meal, setMeal] = useState();

  async function fetchData() {
    const _meal = await fetchMeal(id);
    setMeal(_meal);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [meal, setMeal];
}
