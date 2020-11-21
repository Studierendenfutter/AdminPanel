import React, { useEffect, useState } from "react";
import { Dropdown, Form } from "semantic-ui-react";
import useCanteens from "../../services/hooks/useCanteens";

export default function MealForm({ meal, setMeal }) {
  const [localMeal, setLocalMeal] = useState(meal);
  const canteens = useCanteens();

  useEffect(() => {
    setLocalMeal(meal);
  }, [meal]);

  if (!localMeal) {
    return null;
  }

  const handleMealUpdate = () => {
    setMeal(localMeal);
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setLocalMeal({ ...meal, [name]: value });
  };

  return (
    <Form>
      <Form.Dropdown
        placeholder="Select Canteen"
        fluid
        search
        selection
        value={localMeal.canteen_id}
        onChange={(_, { value }) =>
          handleFormChange({ target: { name: "canteen_id", value } })
        }
        onBlur={handleMealUpdate}
        label="Canteen"
        options={canteens.map((canteen) => ({
          key: canteen.id,
          value: canteen.id,
          text: canteen.name,
        }))}
      />

      <Form.Input
        value={localMeal.name}
        label="Name"
        name="name"
        onChange={handleFormChange}
        onBlur={handleMealUpdate}
      />
      <Form.Input
        value={localMeal.date}
        label="Date"
        name="date"
        onChange={handleFormChange}
        onBlur={handleMealUpdate}
      />
    </Form>
  );
}
