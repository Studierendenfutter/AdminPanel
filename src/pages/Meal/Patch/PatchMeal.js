import React, { useState } from "react";
import { useParams } from "react-router";
import { Button, Dropdown, Header, Segment } from "semantic-ui-react";
import MealForm from "../../../components/MealForm";
import MealPriceForm from "../../../components/MealPriceForm";
import TableWrapper from "../../../components/TableWrapper";
import useMeal from "../../../services/hooks/useMeal";
import useMealHasMealTypes from "../../../services/hooks/useMealHasMealTypes";
import useMealPrices from "../../../services/hooks/useMealPrices";
import useMealTypes from "../../../services/hooks/useMealTypes";

export default function PatchMeal() {
  const { mealId } = useParams();
  const mealPriceTemplate = {
    price: "4.00",
    meal_id: mealId,
    user_category_id: 0,
  };

  const [meal, setMeal] = useMeal(mealId);
  const [prices, createPrice, deletePrice] = useMealPrices(mealId);
  const [
    mealHasMealTypes,
    createMealHasMealType,
    deleteMealHasMealType,
  ] = useMealHasMealTypes(mealId);
  const [newMealTypeId, setNewMealTypeId] = useState(0);
  const mealTypes = useMealTypes();
  const [newMealPrice, setNewMealPrice] = useState(mealPriceTemplate);

  return (
    <div>
      <Header>Meal {mealId}</Header>
      <MealForm meal={meal} setMeal={setMeal} />
      <br />
      <div>
        <Header>Prices </Header>
        <TableWrapper
          columnNames={["Price", "Group", "Action"]}
          content={prices.map((price) => [
            price.price,
            price.name,
            <Button
              icon="trash"
              negative
              onClick={() => deletePrice(price.id)}
            />,
          ])}
        />
        <div>
          <Segment>
            <Header size="small">Add Price</Header>
            <MealPriceForm
              mealPrice={newMealPrice}
              setMealPrice={setNewMealPrice}
            />
            <br />
            <Button
              content="Add "
              positive
              onClick={() => {
                createPrice(newMealPrice);
                setNewMealPrice(mealPriceTemplate);
              }}
            />
          </Segment>
        </div>
      </div>
      <br />
      <div>
        <Header>Categories</Header>
        <TableWrapper
          columnNames={["Name", "Image", "Action"]}
          content={mealHasMealTypes.map((mealHasMealTypes) => [
            mealHasMealTypes.name,
            <img
              alt="name"
              src={mealHasMealTypes.icon_url}
              style={{ width: "16px" }}
            />,
            <Button
              icon="trash"
              negative
              onClick={() => deleteMealHasMealType(mealHasMealTypes.id)}
            />,
          ])}
        />
        <div>
          <Segment>
            <Header size="small">Add Meal Type</Header>
            <Dropdown
              placeholder="Select Meal Type"
              fluid
              search
              selection
              value={newMealTypeId}
              onChange={(_, { value }) => setNewMealTypeId(value)}
              label="Canteen"
              options={mealTypes.map((mealType) => ({
                key: mealType.id,
                value: mealType.id,
                text: mealType.name,
              }))}
            />
            <br />
            <Button
              positive
              content="Add"
              onClick={() =>
                createMealHasMealType({
                  meal_id: mealId,
                  meal_type_id: newMealTypeId,
                })
              }
            />
          </Segment>
        </div>
      </div>
    </div>
  );
}
