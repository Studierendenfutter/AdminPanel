import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Header } from "semantic-ui-react";
import MealForm from "../../../components/MealForm/MealForm";
import getDateString from "../../../services/utils/getDateString";
import postMeal from "../../../services/backend/postMeal";

export default function CreateMeal() {
  const history = useHistory();
  const [meal, setMeal] = useState({
    canteen_id: 0,
    name: "",
    date: getDateString(),
  });

  const createMeal = async () => {
    const _meal = await postMeal(meal);
    history.push("/meals/" + _meal.id);
  };

  return (
    <div>
      <Header>Create Meal</Header>
      <MealForm meal={meal} setMeal={setMeal} />
      <br />
      <Button icon="send" positive onClick={createMeal}>
        Create
      </Button>
    </div>
  );
}
