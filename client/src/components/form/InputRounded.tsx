import { useState, useEffect } from "react";
import { Typography } from "../../common/Typography";

interface InputRoundedProps {
  as?: React.ElementType;
  label: string;
  value?: string | null;
  name: string;
  placeholder: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  className?: string;
  error?: string | false | null;
  color: "brown" | "white";
  gap?: boolean;
}

export const InputRounded = ({
  as: Tag = "input",
  value,
  name,
  placeholder,
  onChange,
  required,
  className,
  error,
  color,
  gap,
}: InputRoundedProps) => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<
    string | false | undefined | null
  >(null);

  // Keep previous error message in memory to make the animation fluid
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  const requiredClass = required ? "required" : "";

  const colorClass =
    color === "white"
      ? "text-whitePrimary placeholder:text-whitePrimary border-whitePrimary bg-BrownPrimary"
      : color === "brown"
      ? "text-brownPrimary placeholder:text-brownPrimary border-brownPrimary bg-WhitePrimary"
      : "";

  const gapClass = gap ? "gap-15" : "";

  return (
    <div className={`${className}`}>
      <Typography
        component="label"
        fontFamily="FKGroteskBold"
        fontSize="13"
        textColor="beige"
        className={`flex flex-col w-full ${gapClass}`}
      >
        <Tag
          onBlur={() => {
            value !== null ? setShowError(true) : setShowError(false);
          }}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          className={`w-full rounded-full py-15 pr-[65px] pl-[20px]
        outline-none font-fkGroteskBold                 
            ${error ? "border-red/50" : ""}
            ${colorClass}
            ${requiredClass}
          `}
        />
      </Typography>

      <div
        className={`${
          error && showError ? "max-h-12" : "max-h-0"
        } overflow-hidden transition-all duration-200`}
      >
        <div className="text-red flex items-top gap-1">
          {/* <div className='flex items-top'><Icon name="warning" className="w-3 h-3 mt-[.225rem]" /></div> */}
          <Typography
            component="p"
            fontSize="13"
            textColor="beige"
            className="block pb-3 text-red-600"
          >
            {errorMessage}
          </Typography>
        </div>
      </div>
    </div>
  );
};
