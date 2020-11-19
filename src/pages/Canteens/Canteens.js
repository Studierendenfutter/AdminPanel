import React from "react";
import useCanteens from "../../services/hooks/useCanteens";
import TableWrapper from "../../components/TableWrapper";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Canteens() {
  const canteens = useCanteens({ city: "Münster" });
  if (!canteens) {
    return null;
  }
  return (
    <TableWrapper
      columnNames={["ID", "Name", "Address", "City", "Type", "Actions"]}
      content={canteens.map((canteen) => [
        canteen.id,
        canteen.name,
        canteen.address,
        canteen.city,
        canteen.type,
        <div>
          <Button
            as={Link}
            to={`/canteens/${canteen.id}/meals`}
            icon="food"
            primary
          ></Button>
        </div>,
      ])}
    />
  );
}
