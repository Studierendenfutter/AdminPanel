import React, { useState } from "react";
import useCanteens from "../../services/hooks/useCanteens";
import getCanteenCrawlMeals from "../../services/backend/getCanteenCrawlMeals";
import TableWrapper from "../../components/TableWrapper";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Canteens() {
  const canteens = useCanteens({ city: "Münster" });
  const [isCrawlingMeals, setIsCrawlingMeals] = useState(false);
  if (!canteens) {
    return null;
  }
  return (
    <div>
      <Button
        primary
        basic
        as={"a"}
        href="https://app.studierendenfutter.de/canteens"
        content="Active Today"
      />
      <TableWrapper
        columnNames={["ID", "Name", "Address", "City", "Type", "Actions"]}
        content={canteens.reverse().map((canteen) => [
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
            <Button
              onClick={async () => {
                setIsCrawlingMeals(true);
                setTimeout(() => setIsCrawlingMeals(false), 2000);
                await getCanteenCrawlMeals(canteen.id);
              }}
              icon="cloud download"
              color="green"
              loading={isCrawlingMeals}
            ></Button>
          </div>,
        ])}
      />
    </div>
  );
}
