import { Layout } from "../../components/layout/Layout";
import logo from "../../assets/images/logo.svg";
import { SignUpForm } from "../../features/SignUpForm";
import { Button } from "../../common/button";

export default function Landing() {
  return (
    <>
      <Layout background="brown">
        <div className="min-h-screen py-30 px-20 flex flex-col justify-between items-center gap-y-30">
          <img src={logo} alt="Logo Funny Fur" />
          <SignUpForm />
          <Button
            type="submit"
            background="white"
            name="Connexion" />
        </div>
      </Layout>
    </>
  );
}
