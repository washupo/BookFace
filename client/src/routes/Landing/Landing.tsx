import logo from "../../assets/images/logo.svg"
import { LayoutDark } from "../../components/layout/LayoutDark"

export default function Landing() {
  return (
    <>
      <LayoutDark>
        <img src={logo} alt="Logo Funny Fur" />
      </LayoutDark>
    </>
  )
}