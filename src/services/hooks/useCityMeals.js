import { useState, useEffect } from "react";
import deleteMeal from "../backend/deleteMeal";
import fetchCityMeals from "../backend/fetchCityMeals";

export default function useCityMeals(cityId) {
  const [cityMeals, setCityMeals] = useState([]);

  async function fetchData() {
    const cityMeals = await fetchCityMeals(cityId);

    setCityMeals(cityMeals);
  }

  async function deleteCityMeal(mealId) {
    await deleteMeal(mealId);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [cityMeals, deleteCityMeal];
}
