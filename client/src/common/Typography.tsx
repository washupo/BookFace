interface TypographyProps {
  component: "h1" | "h2" | "h3" | "p" | "span" | "label" | "button";
  fontFamily?: "FKGrotesk" | "FKGroteskBold";
  fontSize: "20" | "15" | "13";
  textColor?: "brown" | "beige" | "white";
  hoverTextColor?: "brown" | "beige" | "white";
  underline?: boolean;
  uppercase?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Typography = ({
  component: Component = "p",
  fontFamily = "FKGrotesk",
  fontSize,
  textColor,
  hoverTextColor,
  underline = false,
  uppercase = false,
  children,
  className,
  onClick,
}: TypographyProps) => {
  let fontSizeClass = "";
  let textColorClass = "";
  let hoverTextColorClass = "";

  const underlineClass = underline ? "underline" : "";
  const fontFamilyClass =
    fontFamily === "FKGrotesk" ? "font-fkGrotesk" : "font-fkGroteskBold";
  const uppercaseClass = uppercase ? "uppercase" : "";

  switch (fontSize) {
    case "13":
      fontSizeClass = "text-13";
      break;
    case "15":
      fontSizeClass = "text-15";
      break;
    case "20":
      fontSizeClass = "text-20";
      break;
  }

  switch (textColor) {
    case "brown":
      textColorClass = "text-brownPrimary";
      break;
    case "beige":
      textColorClass = "text-beigePrimary";
      break;
    case "white":
      textColorClass = "text-whitePrimary";
      break;
  }

  switch (hoverTextColor) {
    case "brown":
      hoverTextColorClass = "hover:text-brownPrimary";
      break;
    case "white":
      hoverTextColorClass = "hover:text-whitePrimary";
      break;
    case "beige":
      hoverTextColorClass = "hover:text-beigePrimary";
      break;
  }

  return (
    <Component
      className={`${fontSizeClass} ${textColorClass} ${hoverTextColorClass} ${fontFamilyClass} ${underlineClass} ${uppercaseClass} ${className}`}onClick={onClick}
    >
      {children}
    </Component>
  );
};

{/* <Typography
  component="h1"
  fontFamily="FKGrotesk"
  fontSize="20"
  textColor="brown"
  hoverTextColor="beige"
  underline={true}
  uppercase={true}
  className="my-custom-class"
>
  Ceci est un titre
</Typography> */}
