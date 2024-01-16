import { Input } from "../form/Input";
import { Form } from "../form/Form";
import { Button } from "../../common/button";

interface SignUpFormProps {
  onSubmit: () => void;
  fields?: {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }[];
}

  export const SignUpForm = ({ onSubmit, fields }: SignUpFormProps): JSX.Element => {
  return (
    <Form onSubmit={() => {}}>
      <div className="w-full flex flex-col gap-25">
        {" "}
        {fields.map((field, index) => (
          <Input key={index} {...field} />
        ))}
        <Input
          label="Nom d'utilisateur"
          placeholder="Nom d'utilisateur"
          type="text"
          name="username"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Espèce"
          placeholder="Chien, chat, etc..."
          type="text"
          name="species"
          value=""
          onChange={() => {}}
        />
        <div className="flex gap-x-25">
          <Input
            label="Genre"
            placeholder="X"
            type="text"
            name="species"
            value=""
            className="w-1/4"
            onChange={() => {}}
          />

          <Input
            label="Date de naissance"
            placeholder="DD/MM/YYYY"
            type="text"
            name="species"
            value=""
            className="w-3/4 "
            onChange={() => {}}
          />
        </div>
        <Input
          label="Adresse email"
          placeholder="johndoe@example.com"
          type="text"
          name="species"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Mot de passe"
          placeholder="*********"
          type="text"
          name="username"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Ressaisir mot de passe"
          placeholder="*********"
          type="text"
          name="username"
          value=""
          onChange={() => {}}
        />
      </div>
      <Button type="submit" background="white" name="Connexion" />
    </Form>
  );
};
