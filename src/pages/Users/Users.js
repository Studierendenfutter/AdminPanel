import React from "react";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import useUsers from "../../services/hooks/useUsers";

export default function Users() {
  const [users] = useUsers();

  return (
    <TableWrapper
      columnNames={["ID", "Email", "Confirmed", "Created On", "Deleted On"]}
      content={users.reverse().map((user) => [
        user.id,
        user.email,
        "" + !!user.confirmed,
        new Date(Date.parse(user.created_at)).toLocaleDateString("de-DE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        new Date(Date.parse(user.deleted_at)).toLocaleDateString("de-DE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      ])}
    />
  );
}
