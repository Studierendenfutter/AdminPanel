import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import MealForm from "../../../components/MealForm/MealForm";
import getDateString from "../../../services/utils/getDateString";

export default function CreateMeal() {
  const [meal, setMeal] = useState({
    canteenId: 0,
    name: "",
    price: "",
    date: getDateString(),
  });

  return (
    <div>
      <MealForm meal={meal} setMeal={setMeal} />
      <br />
      <Button icon="send" positive>
        Create
      </Button>
    </div>
  );
}
