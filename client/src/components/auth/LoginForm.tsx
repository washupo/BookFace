import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Input } from "../form/Input";
import { Form } from "../form/Form";
import { Button } from "../../common/button";

export const LoginForm = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
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
        `${import.meta.env.VITE_API_URL}/auth/login`,
        credentials
      );

      // Vérifier que la requête est réussie, vous pouvez traiter la réponse ici
      console.log("Réponse du serveur :", response.data);
      // console.log('Authentification réussie !');

      // Rediriger l'utilisateur vers homepage
      navigate("/homepage");

      // Extraction des tokens du champ data de l'objet response
      const { token } = response.data;

      //Stockage de la valeur du token dans le localStorage(dans le stockage local du navigateur)
      localStorage.setItem("token", token);

      // Stockage du refreshToken dans le localStorage pour obtenir de nouveaux jetons d'accès lorsque le jeton d'accès actuel expire.
      // localStorage.setItem("refreshToken", refreshToken);
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
    <>
      <Form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-25">
          <Input
            as="input"
            label="Email"
            placeholder="Email"
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
        </div>
        <Button type="submit" background="white" name="Connexion" />
      </Form>
    </>
  );
};
