import { Layout } from "../../components/layout/Layout";
import logo from "../../assets/images/logo.svg";
import { LoginForm } from "../../features/LoginForm";
import { Button } from "../../common/button";
import Auth from "../../components/auth/Auth";

export default function Landing() {
  return (
    <>
      <Layout background="brown">
        <div className="h-screen py-30 px-20 flex flex-col justify-between items-center">
          <img src={logo} alt="Logo Funny Fur" />
          <Auth />
          <LoginForm />
          <Button
            type="submit"
            background="white"
            name="Connexion" />
        </div>
      </Layout>
    </>
  );
}
