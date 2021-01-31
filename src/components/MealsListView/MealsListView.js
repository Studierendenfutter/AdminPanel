import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import sendTestMail from "../../services/backend/sendTestMail";
import TableWrapper from "../TableWrapper";

export default function MealsListView({ meals }) {
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
      <Button onClick={sendTestMail} content="send test mail" icon="send"/>
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
                <Button
                  as={Link}
                  to={`/meals/${meal.id}`}
                  icon="edit"
                  primary
                ></Button>,
              ])
            ),
          []
        )}
      />
    </div>
  );
}
