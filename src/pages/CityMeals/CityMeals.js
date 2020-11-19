import React from "react";
import { useParams } from "react-router";
import useCityMeals from "../../services/hooks/useCityMeals";
import MealsListView from "../../components/MealsListView";

export default function CityDetail() {
  const { cityId } = useParams();
  const [meals] = useCityMeals(cityId);

  if (!meals) {
    return null;
  }
  return <MealsListView meals={meals} />;
}
