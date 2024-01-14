import { LayoutDark } from "../../components/layout/LayoutDark"
import logo from "../../assets/images/logo.svg"
import { LoginForm } from "../../features/LoginForm"
import { Button } from "../../common/button"

export default function Landing() {
  return (
    <>
      <LayoutDark>
        <img src={logo} alt="Logo Funny Fur" />
        <LoginForm />
        <Button name="Connexion" />
      </LayoutDark>
    </>
  )
}