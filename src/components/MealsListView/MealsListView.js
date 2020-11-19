import React from "react";
import TableWrapper from "../TableWrapper";

export default function MealsListView({ meals }) {
  if (!meals) {
    return null;
  }

  return (
    <TableWrapper
      columnNames={["Id", "Canteen", "Meal Name", "Prices", "Types", "Date"]}
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
            ])
          ),
        []
      )}
    />
  );
}
