import React, { useState } from "react";
import Login from "../Login";
import Stats from "../Stats";
import useAuthToken from "../../services/hooks/useAuthToken";

export default function Home() {
  const [authToken] = useAuthToken();

  if (!authToken) {
    return <Login />;
  }

  return <Stats />;
}
