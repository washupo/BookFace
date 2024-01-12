import { Typography } from "../../components/Typography";
import { Icon } from "../../components/Icon";

export default function HomePage() {
  return (
    <>
      <Typography
        component="h1"
        fontSize="20"
        textColor="brown"
        hoverTextColor="beige"
      >
        HomePage
      </Typography>
      <Icon name="home" size="large" fill="black" />
      <Icon name="home" size="small" fill="black" />
    </>
  );
}
