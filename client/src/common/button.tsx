import { Typography } from "./Typography";

interface ButtonProps {
  type: "button" | "submit";
  name: string;
  background: "brown" | "beige";
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({
  type,
  name,
  background,
  className,
}: ButtonProps): JSX.Element => {
  const backgroundClass =
    background === "brown" ? "bg-brownPrimary" : "bg-whitePrimary";

  return (
    <>
      <button
        type={type}
        className={`${className} ${backgroundClass} bg-whitePrimary py-15 w-44 rounded-5 hover:bg-beigePrimary transition duration-300 ease-in-out`}
      >
        <Typography component="p" fontSize="15" textColor="brown">
          {name}
        </Typography>
      </button>
    </>
  );
};
