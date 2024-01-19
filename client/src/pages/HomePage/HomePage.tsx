//import { Typography } from "../../common/Typography";
import Feed from "../../components/Feed";
import { Logo } from "../../components/Logo";
import { Layout } from "../../components/layout/Layout";
import { NavBar } from "../../components/layout/NavBar";

export default function HomePage() {
  return (
    <>
      <Layout
        background="white"
        className="w-full min-h-screen flex flex-col py-30 px-20 gap-30"
      >
        <header className="flex items-center ">
          <Logo fill="brown" />
        </header>
        <main className="overflow-y">
          <Feed />
        </main>
      </Layout>
      <NavBar />
    </>
  );
}
