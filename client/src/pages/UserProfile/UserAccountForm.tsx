import { useState, useEffect } from "react";
import { Input } from "../../components/form/Input";
import { Form } from "../../components/form/Form";
import { Button } from "../../common/button";
import { api } from "../../API/api";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


interface ProfilDataProps {
  userId: string;
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

export const UserAccountForm = (): JSX.Element => {

  const [profileDatas, setProfileDatas] = useState<ProfilDataProps[]>([]);

  const [credentials, setCredentials] = useState({
    bio: "",
    username: "",
    email: "",
    birthdate: "",
    species: "",
    gender: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

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

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

      const formData = new FormData();
      formData.append("bio", credentials.bio);
      formData.append("username", credentials.username);
      formData.append("email", credentials.email);
      formData.append("birthdate", credentials.birthdate);
      formData.append("species", credentials.species);
      formData.append("password", credentials.password);

      const decodedToken: any = jwtDecode(localStorage.getItem("token") as string);
      const userId = decodedToken._id;
      console.log("userId :", userId);

      const response = await axios.put(`http://localhost:8000/profile/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );

      // Vérifier que la requête est réussie, vous pouvez traiter la réponse ici
      console.log("Profil mis à jour :", response.data);

      // Alerte succès
      alert("Profil mis à jour avec succès !");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data?.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    } finally {
      // Clear the user's ID from the headers to avoid affecting other requests
      delete api.defaults.headers.common["X-User-Id"];
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
{profileDatas.map((profileData) => (
  <div 
    className="w-full flex flex-col gap-25"
    key={profileData.userId}
  >
    <Input
      as="textarea"
      label="Bio"
      value={profileData.bio}
      placeholder={profileData.bio}
      type="text"
      name="bio"
      color="brown"
      border="all"
      gap={true}
      onChange={handleChange}
    />
    <Input
      as="input"
      label="Nom d'utilisateur"
      value={profileData.username} 
      placeholder={profileData.username}
      type="text"
      name="username"
      color="brown"
      border="bottom"
      onChange={handleChange}
    />
    <Input
      as="input"
      label="Espèce"
      value={profileData.species}
      placeholder={profileData.species} 
      type="text"
      name="species"
      color="brown"
      border="bottom"
      onChange={handleChange}
    />
    <div className="flex gap-x-25">
      <Input
        as="input"
        label="Genre"
        value={profileData.gender} 
        placeholder={profileData.gender}
        type="text"
        name="species"
        color="brown"
        border="bottom"
        className="w-1/4"
        onChange={handleChange}
      />
      <Input
        as="input"
        label="Date de naissance"
        value={profileData.birthdate}
        placeholder={profileData.birthdate} 
        type="text"
        name="species"
        color="brown"
        border="bottom"
        className="w-3/4 "
        onChange={handleChange}
      />
    </div>
    <Input
      as="input"
      label="Adresse email"
      value={profileData.email}
      placeholder={profileData.email} 
      type="text"
      name="species"
      color="brown"
      border="bottom"
      onChange={handleChange}
    />
    <Input
      as="input"
      label="Mot de passe"
      value={profileData.password}
      placeholder="*********" 
      type="password"
      name="password"
      color="brown"
      border="bottom"
      onChange={handleChange}
    />
    <Input
      as="input"
      label="Ressaisir mot de passe"
      value={profileData.password}
      placeholder="*********"
      type="password"
      name="password"
      color="brown"
      border="bottom"
      onChange={handleChange}
    />
  </div>
))}

      <Button type="submit" background="brown" name="Connexion" />
    </Form>
  );
};
