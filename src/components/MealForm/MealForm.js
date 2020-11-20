import React from "react";
import { Form, Header } from "semantic-ui-react";

export default function MealForm({ meal, setMeal }) {
  if (!meal) {
    return null;
  }
  const handleFormChange = ({ target: { name, value } }) => {
    setMeal({ ...meal, [name]: value });
  };
  return (
    <Form>
      <Header>Create Meal</Header>
      <Form.Input
        value={meal.canteen_id}
        label="Canteen Id"
        type="number"
        name="canteen_id"
        onChange={handleFormChange}
      />
      <Form.Input
        value={meal.name}
        label="Name"
        name="name"
        onChange={handleFormChange}
      />
      <Form.Input
        value={meal.date}
        label="Date"
        name="date"
        onChange={handleFormChange}
      />
    </Form>
  );
}
