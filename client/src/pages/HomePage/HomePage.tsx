import { Typography } from "../../common/Typography";
import { Icon } from "../../components/Icon";
import { Logo } from "../../components/logo";
import { Layout } from "../../components/layout/Layout";
import { NavBar } from "../../components/layout/NavBar";

export default function HomePage() {
  return (
    <>
      <Layout background="white">
        <Logo fill="brown" />
        <Typography
          component="h1"
          fontSize="20"
          textColor="brown"
          hoverTextColor="beige"
        >
          HomePage
        </Typography>
        <Icon name="home" size="large" fill="brown" />
        <Icon name="home" size="small" fill="beige" />
      </Layout>
      <NavBar />
    </>
  );
}