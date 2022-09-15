import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import sendTestMail from "../../services/backend/sendTestMail";
import TableWrapper from "../TableWrapper";

export default function MealsListView({ meals, deleteMeal }) {
  const [mealToBeDeletedId, setMealToBeDeletedId] = useState(null);
  if (!meals) {
    return null;
  }

  return (
    <div>
      <Button
        icon="add"
        as={Link}
        to={"/meals/create"}
        positive
        content="add Meal"
      />
      <Button onClick={sendTestMail} content="send test mail" icon="send" />
      <Modal
        basic
        onClose={() => setMealToBeDeletedId(null)}
        open={mealToBeDeletedId}
        size="small"
      >
        <Header icon>You sure?</Header>
        <Modal.Content>
          <p>
            Your action will delete the meal with the ID {mealToBeDeletedId}.
            Are you sure want to delete this meal?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="red"
            inverted
            onClick={() => setMealToBeDeletedId(null)}
          >
            <Icon name="remove" /> No
          </Button>
          <Button
            color="green"
            inverted
            onClick={() => {
              deleteMeal(mealToBeDeletedId);
              setMealToBeDeletedId(null);
            }}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <TableWrapper
        columnNames={[
          "Id",
          "Canteen",
          "Meal Name",
          "Prices",
          "Types",
          "Date",
          "Action",
        ]}
        content={meals.reduce(
          (all, canteen) =>
            all.concat(
              canteen.meals.map((meal) => [
                meal.id,
                canteen.name,
                meal.name,
                meal.prices.map((price) => <span>{price.price}/</span>),
                meal.types.map((type) => (
                  <img
                    style={{ height: "15px" }}
                    alt={type.name}
                    src={type.icon_url}
                  />
                )),
                meal.date,
                <div>
                  <Button
                    as={Link}
                    to={`/meals/${meal.id}`}
                    icon="edit"
                    primary
                  />
                  <Button
                    icon="delete"
                    color="red"
                    basic
                    onClick={() => setMealToBeDeletedId(meal.id)}
                  />
                </div>,
              ])
            ),
          []
        )}
      />
    </div>
  );
}
