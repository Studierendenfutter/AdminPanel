import React from "react";
import { useParams } from "react-router";
import MealForm from "../../../components/MealForm";
import useMeal from "../../../services/hooks/useMeal";

export default function PatchMeal() {
  const { mealId } = useParams();

  const [meal, setMeal] = useMeal(mealId);

  console.log(meal);
  return <MealForm meal={meal} setMeal={setMeal} />;
}
