interface TypographyProps {
  component: "h1" | "h2" | "h3" | "p" | "span";
  fontFamily?: "FKGrotesk" | "FKGroteskBold";
  fontSize: "20" | "15" | "13";
  textColor: "brown" | "beige" | "white";
  hoverTextColor?: "brown" | "beige" | "white";
  underline?: boolean;
  uppercase?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  component: Component = "p",
  fontFamily = "FKGrotesk",
  fontSize,
  textColor = "brown",
  hoverTextColor,
  underline = false,
  uppercase = false,
  children,
  className,
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
      className={`${fontSizeClass} ${textColorClass} ${hoverTextColorClass} ${fontFamilyClass} ${underlineClass} ${uppercaseClass} ${className}`}
    >
      {children}
    </Component>
  );
};
