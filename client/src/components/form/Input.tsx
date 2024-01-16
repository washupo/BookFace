import { ChangeEvent, useState, useEffect } from "react";
import { Typography } from "../../common/Typography";
// import Icon from '@/components/common/Icon';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string | null;
  placeholder?: string;
  autoComplete?: string;
  error?: string | false | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  autoComplete,
  error,
  onChange,
  className = "",
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

  return (
    <div className={`${className}`}>
      <label className="w-full flex flex-col">
        <Typography
          component="span"
          fontSize="13"
          textColor="beige"
          fontFamily="FKGroteskBold"
          className=""
        >
          {label}
        </Typography>
        <input
          onBlur={() => {
            value !== null ? setShowError(true) : setShowError(false);
          }}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          className={`
            text-whitePrimary bg-transparent outline-none placeholder:text-whitePrimary placeholder:font-fkGrotesk font-fkGroteskBold py-[11px] border-b-2 border-whitePrimary
            ${error ? "border-red/50" : "border-white/5"}
          `}
        />
      </label>
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