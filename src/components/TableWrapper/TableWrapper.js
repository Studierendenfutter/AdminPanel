import React from "react";
import { Table } from "semantic-ui-react";

export default function TableWrapper({ columnNames = [], content = [] }) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {columnNames.map((cn) => (
            <Table.HeaderCell>{cn}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {content.map((row) => (
          <Table.Row>
            {row.map((cell) => (
              <Table.Cell>{cell}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
