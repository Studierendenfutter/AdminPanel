import React, { useState } from "react";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import useCities from "../../services/hooks/useCities";
import { Checkbox, Modal, Icon, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Cities() {
  const [cities, updateCity] = useCities();
  const [updateReady, setUpdateReady] = useState();

  return (
    <div>
      <TableWrapper
        columnNames={["ID", "Name", "On Semester Break", "Actions"]}
        content={cities.map((city) => [
          city.id,
          city.city,
          <Checkbox
            checked={!!city.is_semester_break}
            toggle
            onClick={() => {
              setUpdateReady({
                ...city,
                is_semester_break: !city.is_semester_break,
              });
            }}
          />,
          <Button
            as={Link}
            to={`/cities/${city.id}/meals`}
            icon="food"
            primary
          ></Button>,
        ])}
      />

      <Modal open={!!updateReady} onClose={() => setUpdateReady()} basic>
        <Header icon>
          <Icon name="pencil alternate" />
          Update City
        </Header>
        <Modal.Content>
          <p style={{ textAlign: "center" }}>
            Are you sure you want to update{" "}
            {updateReady ? updateReady.city : ""}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setUpdateReady()}>
            <Icon name="remove" /> No
          </Button>
          <Button
            color="green"
            inverted
            onClick={() => {
              updateCity(updateReady);
              setUpdateReady();
            }}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
