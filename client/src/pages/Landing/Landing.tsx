import { Layout } from "../../components/layout/Layout";
import logo from "../../assets/images/logo.svg";
import Auth from "../../components/auth/Auth";

export default function Landing() {
  return (
    <>
      <Layout
        background="brown"
        className="w-full min-h-screen flex flex-col py-30 px-20 gap-30"
      >
        <img src={logo} alt="Logo Funny Fur" />
        <Auth />
      </Layout>
    </>
  );
}
