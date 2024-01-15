import { Input } from "../components/form/Input"
import { Form } from "../components/form/Form"

export const SignUpForm = (): JSX.Element => {
    return (
        <Form
            onSubmit={() => { }}
        >
            <Input
                label="Nom d'utilisateur"
                placeholder="Nom d'utilisateur"
                type="text"
                name="username"
                value=""
                onChange={() => { }} />

            <Input
                label="Espèce"
                placeholder="Chien, chat, etc..."
                type="text"
                name="species"
                value=""
                onChange={() => { }} />

            <div className="grid grid-cols-3 max-w-full gap-25">
    
                <Input
                label="Genre"
                placeholder="F"
                type="text"
                name="species"
                value=""
                onChange={() => { }} />

            <Input
                label="Date de naissance"
                placeholder="Chien, chat, etc..."
                type="text"
                name="species"
                value=""
                onChange={() => { }}
                className="col-span-2" />
            </div>
            


            <Input
                label="Adresse email"
                placeholder="johndoe@example.com"
                type="text"
                name="species"
                value=""
                onChange={() => { }} />

            <Input
                label="Mot de passe"
                placeholder="*********"
                type="text"
                name="username"
                value=""
                onChange={() => { }} />

            <Input
                label="Ressaisir mot de passe"
                placeholder="*********"
                type="text"
                name="username"
                value=""
                onChange={() => { }} />
        </Form>

    )
}