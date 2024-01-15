import { Input } from "../components/form/Input"
import { Form } from "../components/form/Form"

export const LoginForm = (): JSX.Element => {
    return (
        <Form 
        onSubmit={() => {}}
        >
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
        </Form>

    )
}