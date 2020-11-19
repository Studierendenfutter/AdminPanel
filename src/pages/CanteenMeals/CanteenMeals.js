import React from "react";
import { useParams } from "react-router";
import MealsListView from "../../components/MealsListView";
import useCanteenMeals from "../../services/hooks/useCanteenMeals";

export default function CanteenMeals() {
  const { canteenId } = useParams();
  const [canteenMeals] = useCanteenMeals(canteenId);

  return <MealsListView meals={canteenMeals} />;
}
