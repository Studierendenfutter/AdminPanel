import React, { useState } from "react";
import { Form, Header, Button, Segment } from "semantic-ui-react";
import postAdminLogin from "../../services/backend/postAdminLogin";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ password: "" });

  const changeForm = ({ target: { value, name } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const login = async () => {
    await postAdminLogin(loginData);
    window.location.reload();
  };

  return (
    <div>
      <Segment>
        <Form>
          <Header>Login</Header>
          <Form.Input
            label="Password"
            type="password"
            value={loginData.password}
            name="password"
            onChange={changeForm}
          />
          <Button type="button" onClick={login}>
            Login
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
