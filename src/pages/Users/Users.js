import React from "react";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import useUsers from "../../services/hooks/useUsers";

export default function Users() {
  const [users] = useUsers();

  return (
    <TableWrapper
      columnNames={["ID", "Email", "Confirmed", "Deleted On"]}
      content={users.map((user) => [
        user.id,
        user.email,
        "" + !!user.confirmed,
        user.deleted_at
      ])}
    />
  );
}
