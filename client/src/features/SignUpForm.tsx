import { Input } from "../components/form/Input";

export const SignUpForm = (): JSX.Element => {
  return (
    <div className="grid w-full gap-25">
      <Input
        label="Nom d'utilisateur"
        placeholder="ddnezncndzndlez,nd"
        type="text"
        name="username"
        value=""
        onChange={() => {}}
      />
      <Input
        label="Mot de passe"
        placeholder="d ekez jcdez,ckezk,c,zd"
        type="text"
        name="username"
        value=""
        onChange={() => {}}
      />
    </div>
  );
};
