import { useState, useEffect } from "react";
import fetchUsers from "../backend/fetchUsers";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const users = await fetchUsers();

    setUsers(users);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return [users];
}
