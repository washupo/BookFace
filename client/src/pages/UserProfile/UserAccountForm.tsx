import { useState, useEffect } from "react";
import { Input } from "../../components/form/Input";
import { Form } from "../../components/form/Form";
import { Button } from "../../common/button";
import { api } from "../../API/api";
import axios from "axios";



interface UserAccountFormProps {
  onSubmit?: () => void;
}

interface ProfilDataProps {
  _id: string;
  avatar: {
    url: string;
  }
  bio: string;
  username: string;
  email: string;
  birthdate: string;
  species: string;
  gender: string;
  password: string;
}

export const UserAccountForm = ({ onSubmit }: UserAccountFormProps): JSX.Element => {

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await api.get("/profile");
  //       setUser(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  // if (!user) {
  //   return <div>Loading...</div>; }

  const [profileDatas, setProfileDatas] = useState<ProfilDataProps[]>([]);

  useEffect(() => {
    // Récupérer les données du profil
    const getProfileDatas = async () => {

      try {
        // Envoyer requête GET
        const response = await api.get(
          "http://localhost:8000/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // Handle the case where the response is a string
        if (typeof response.data === 'string') {
          console.log('Unexpected response format:', response.data);
          return;
        }

        // Mettre à jour les données du profil
        setProfileDatas(Array.isArray(response.data) ? response.data : [response.data]);
        console.log("Profile :", response.data);
      } catch (error) {
        // Gérer erreur
        if (axios.isAxiosError(error)) {
          console.error('Échec de l\'authentification :', error.response?.data?.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    };

    getProfileDatas();
  }, []);

  return (
    <Form onSubmit={onSubmit  || (() => {})}>
      {profileDatas.map((profileData) => (
      <div className="w-full flex flex-col gap-25">       
        <Input
          as="textarea"
          label="Bio"
          placeholder="Ajoutez une petite description"
          type="text"
          name="username"
          value=""
          color="brown"
          border="all"
          gap={true}
          onChange={() => { }}
        />
        <Input
          as="input"
          label="Nom d'utilisateur"
          placeholder={profileData.username}
          type="text"
          name="username"
          value=""
          color="brown"
          border="bottom"
          onChange={() => { }}
        />
        <Input
          as="input"
          label="Espèce"
          placeholder={profileData.species}
          type="text"
          name="species"
          value=""
          color="brown"
          border="bottom"
          onChange={() => { }}
        />
        <div className="flex gap-x-25">
          <Input
            as="input"
            label="Genre"
            placeholder={profileData.gender}
            type="text"
            name="species"
            value=""
            color="brown"
            border="bottom"
            className="w-1/4"
            onChange={() => { }}
          />

          <Input
            as="input"
            label="Date de naissance"
            placeholder={profileData.birthdate}
            type="text"
            name="species"
            value=""
            color="brown"
            border="bottom"
            className="w-3/4 "
            onChange={() => { }}
          />
        </div>
        <Input
          as="input"
          label="Adresse email"
          placeholder={profileData.email}
          type="text"
          name="species"
          value=""
          color="brown"
          border="bottom"
          onChange={() => { }}
        />
        <Input
          as="input"
          label="Mot de passe"
          placeholder="*********"
          type="text"
          name="username"
          value=""
          color="brown"
          border="bottom"
          onChange={() => { }}
        />
        <Input
          as="input"
          label="Ressaisir mot de passe"
          placeholder="*********"
          type="text"
          name="username"
          value=""
          color="brown"
          border="bottom"
          onChange={() => { }}
        />
        
      </div>
      ))}
      <Button type="submit" background="brown" name="Connexion" />
    </Form>
  );
};
