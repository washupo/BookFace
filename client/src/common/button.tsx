import { Typography } from "./Typography";

interface ButtonProps {
  type: "button" | "submit";
  name: string;
  background: "brown" | "white";
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
    background === "brown" ? "bg-brownPrimary text-whitePrimary" : "bg-whitePrimary text-brownPrimary ";

  return (
    <>
      <button
        type={type}
        className={`${className} ${backgroundClass} py-15 w-44 rounded-5 hover:bg-beigePrimary transition duration-300 ease-in-out`}

      >
        <Typography component="p" fontSize="15" fontFamily="FKGroteskBold">
          {name}
        </Typography>
      </button>
    </>
  );
};
