import { useState, useEffect } from "react";
import fetchCities from "../backend/fetchCities";
import putCity from "../backend/putCity";

export default function useCities() {
  const [cities, setCities] = useState([]);

  async function fetchData() {
    const cities = await fetchCities();

    setCities(cities);
  }

  async function updateCity(city) {
    await putCity(city);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [cities, updateCity];
}
