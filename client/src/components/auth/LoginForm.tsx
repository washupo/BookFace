import { useState } from "react";
import axios from "axios";

import { Input } from "../form/Input";
import { Form } from "../form/Form";
import { Button } from "../../common/button";

export const LoginForm = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login",
        credentials
      );

      // const response = await axios.post("/auth/login",
      //   credentials
      // );

      const { token, refreshToken } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-25">
        <Input
          as="input"
          label="Nom d'utilisateur"
          placeholder="Nom d'utilisateur"
          type="text"
          name="username"
          value={credentials.username}
          color="white"
          border="bottom"
          onChange={handleChange}
        />

        <Input
          as="input"
          label="Mot de passe"
          placeholder="*********"
          type="text"
          name="username"
          value={credentials.password}
          color="white"
          border="bottom"
          onChange={handleChange}
        />
      </div>
      <Button type="submit" background="white" name="Connexion" />
    </Form>
  );
};
