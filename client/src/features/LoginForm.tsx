import { Input } from "../components/form/Input"

export const LoginForm = (): JSX.Element => {
    return (
        <div className="grid w-full gap-25">
            <Input
                label="Nom d'utilisateur"
                placeholder="Nom d'utilisateur"
                type="text"
                name="username"
                value=""
                onChange={() => { }} />
            <Input
                label="Mot de passe"
                placeholder="*********"
                type="text"
                name="username"
                value=""
                onChange={() => { }} />
        </div>
    )
}