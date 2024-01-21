import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../form/Input";
import { Form } from "../form/Form";
import { Button } from "../../common/Button";
import axios from "axios";

export const SignUpForm = () => {
  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
    species: "",
    adress: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signup",
        credentials
      );

      console.log("Réponse du serveur :", response.data);
      navigate("/homepage");
      const { token } = response.data;
      localStorage.setItem("token", token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Échec de l'authentification :",
          error.response?.data?.message
        );
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-25">
        {" "}
        <Input
          as="input"
          label="Nom d'utilisateur"
          placeholder="Nom d'utilisateur"
          type="text"
          name="fullName"
          value={credentials.fullName}
          color="white"
          border="bottom"
          onChange={handleChange}
        />
        <Input
          as="input"
          label="Espèce"
          placeholder="Chien, chat, etc..."
          type="text"
          name="species"
          value={credentials.species}
          color="white"
          border="bottom"
          onChange={handleChange}
        />
        <div className="flex gap-x-25">
          <Input
            as="input"
            label="Genre"
            placeholder="X"
            type="text"
            name="gender"
            value={credentials.gender}
            color="white"
            border="bottom"
            className="w-1/4"
            onChange={handleChange}
          />

          <Input
            as="input"
            label="Date de naissance"
            placeholder="DD/MM/YYYY"
            type="text"
            name="species"
            value={credentials.species}
            color="white"
            border="bottom"
            className="w-3/4 "
            onChange={handleChange}
          />
        </div>
        <Input
          as="input"
          label="Adresse email"
          placeholder="johndoe@example.com"
          type="text"
          name="email"
          value={credentials.email}
          color="white"
          border="bottom"
          onChange={handleChange}
        />
        <Input
          as="input"
          label="Mot de passe"
          placeholder="*********"
          type="password"
          name="password"
          value={credentials.password}
          color="white"
          border="bottom"
          onChange={handleChange}
        />
        <Input
          as="input"
          label="Ressaisir mot de passe"
          placeholder="*********"
          type="password"
          name="password"
          value={credentials.password}
          color="white"
          border="bottom"
          onChange={handleChange}
        />
        <Input
          as="textarea"
          label="Bio"
          placeholder="Ajoutez une petite description pour vous présenter 🐶😺🐰"
          type="text"
          name="username"
          value=""
          color="white"
          border="all"
          gap={true}
          onChange={() => {}}
        />
      </div>
      <Button type="submit" background="white" name="Connexion" />
    </Form>
  );
};
