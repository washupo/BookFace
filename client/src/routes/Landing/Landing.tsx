import logo from "../../assets/images/logo.svg"
import { LayoutNoNav } from "../../components/layout/LayoutNoNav"

export default function Landing() {
  return (
    <>
      <LayoutNoNav>
        <img src={logo} alt="Logo Funny Fur" />
      </LayoutNoNav>
    </>
  )
}