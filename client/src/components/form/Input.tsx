import { useState, useEffect } from "react";
import { Typography } from "../../common/Typography";
// import Icon from '@/components/common/Icon';

interface InputProps {
  as: "input" | "textarea";
  label: string;
  value?: string | null;
  type?: string;
  name: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;  
  required?: boolean;
  className?: string;
  error?: string | false | null;
  color: "brown" | "white";
  border: "bottom" | "all";
  gap?: boolean;
}

export const Input = ({
  as: Tag = "input",
  label,
  value,
  type,
  name,
  placeholder,
  onChange,
  required,
  className,
  error,
  color,
  border,
  gap
}: InputProps) => {
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
    color === "white" ? "text-whitePrimary placeholder:text-whitePrimary border-whitePrimary "
      : color === "brown" ? "text-brownPrimary placeholder:text-brownPrimary border-brownPrimary"
        : "";

  const borderClass =
    border === "bottom" ? "py-[11px] border-b-2" : "border-2 rounded-5 p-2 h-24";

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
          {label}
        
        <Tag
          onBlur={() => {
            value !== null ? setShowError(true) : setShowError(false);
          }}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          className={`
          bg-transparent outline-none font-fkGroteskBold                 
            ${error ? "border-red/50" : ""}
            ${colorClass}
            ${borderClass}
            ${requiredClass}
          `}
        />
      </Typography>

      <div
        className={`${error && showError ? "max-h-12" : "max-h-0"
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

// textarea
{/* <Input 
        as="input"
        label="Mon Input"
        value="Valeur initiale"
        type="text"
        name="monInput"
        placeholder="Entrez du texte"
        onChange={handleChange}
        required={true}
        className="ma-classe-personnalisee"
        error={null}
        color="brown"
        border="all"
        gap={true}
      /> */}

// input
{/* <Input 
        as="textarea"
        label="Mon Textarea"
        value="Valeur initiale"
        name="monTextarea"
        placeholder="Entrez du texte"
        onChange={handleChange}
        required={true}
        className="ma-classe-personnalisee"
        error={null}
        color="white"
        border="bottom"
        gap={true}
      /> */}

