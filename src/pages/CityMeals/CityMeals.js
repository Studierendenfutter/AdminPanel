import React from "react";
import { useParams } from "react-router";
import useCityMeals from "../../services/hooks/useCityMeals";
import TableWrapper from "../../components/TableWrapper/TableWrapper";

export default function CityDetail() {
  const { cityId } = useParams();

  const [meals] = useCityMeals(cityId);
  console.log(meals);
  if (!meals) {
    return null;
  }
  return (
    <TableWrapper
      columnNames={["Id", "Canteen", "Meal Name", "Prices", "Types"]}
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
            ])
          ),
        []
      )}
    />
  );
}
