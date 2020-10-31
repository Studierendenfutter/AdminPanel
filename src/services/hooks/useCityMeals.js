import { useState, useEffect } from "react";
import fetchCityMeals from "../backend/fetchCityMeals";

export default function useCityMeals(cityId) {
  const [cityMeals, setCityMeals] = useState([]);

  async function fetchData() {
    const cityMeals = await fetchCityMeals(cityId);

    setCityMeals(cityMeals);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [cityMeals];
}
