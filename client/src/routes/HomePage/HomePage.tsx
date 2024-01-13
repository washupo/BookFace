import { Typography } from "../../components/Typography";
import { LayoutNav } from "../../components/layout/LayoutNav";

export default function HomePage() {
  return (
    <>
    <LayoutNav>
      <Typography
        component="h1"
        fontSize="20"
        textColor="brown"
        hoverTextColor="beige"
      >
        HomePage
      </Typography>
      </LayoutNav>
    </>
  );
}
