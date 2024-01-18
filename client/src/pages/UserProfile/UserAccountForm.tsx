import { useEffect } from "react";
import { Input } from "../../components/form/Input";
import { Form } from "../../components/form/Form";
import { Button } from "../../common/button";
// import { api } from "../../API/api";


interface UserAccountFormProps {
  onSubmit: () => void;
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

  return (
    <Form onSubmit={onSubmit}>
      <div className="w-full flex flex-col gap-25">
        {" "}
        <Input
          as="textarea"
          label="Nom d'utilisateur"
          placeholder="Nom d'utilisateur"
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
          placeholder="Nom d'utilisateur"
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
          placeholder="Chien, chat, etc..."
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
            placeholder="X"
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
            placeholder="DD/MM/YYYY"
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
          placeholder="johndoe@example.com"
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
      <Button type="submit" background="brown" name="Connexion" />
    </Form>
  );
};
