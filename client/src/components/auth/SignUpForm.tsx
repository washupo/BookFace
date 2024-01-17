import { Input } from "../form/Input";
import { Form } from "../form/Form";
import { Button } from "../../common/button";

interface SignUpFormProps {
  onSubmit: () => void;
}

export const SignUpForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  return (
    <Form onSubmit={onSubmit}>
      <div className="w-full flex flex-col gap-25">
        {" "}
        <Input
          as="input"
          label="Nom d'utilisateur"
          placeholder="Nom d'utilisateur"
          type="text"
          name="username"
          value=""
          color="white"
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
          color="white"
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
            color="white"
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
            color="white"
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
          color="white"
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
          color="white"
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
          color="white"
          border="bottom"
          onChange={() => { }}
        />
      </div>
      <Button type="submit" background="white" name="Connexion" />
    </Form>
  );
};
