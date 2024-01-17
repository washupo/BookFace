import { Input } from "../form/Input";
import { Form } from "../form/Form";
import { Button } from "../../common/button";

export const LoginForm = (): JSX.Element => {
  return (
    <Form onSubmit={() => { }}>
      <div className="w-full flex flex-col gap-25">
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
          label="Mot de passe"
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
