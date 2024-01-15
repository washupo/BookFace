import { Typography } from "./Typography";

interface ButtonProps {
  name: string;
}

export const Button = ({ name }: ButtonProps): JSX.Element => {
  return (
    <>
      <button className="w-44 h-12 bg-whitePrimary rounded-5">
        <Typography component="p" fontSize="15" textColor="brown">
          {name}
        </Typography>
      </button>
    </>
  );
};
