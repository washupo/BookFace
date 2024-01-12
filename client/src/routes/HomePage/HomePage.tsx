import { Typography } from "../../components/Typography";
import { Icon } from "../../components/Icon";
import { Logo } from "../../components/logo";
import { Layout } from "../../components/Layout";

export default function HomePage() {
  return (
    <Layout>
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
  );
}
