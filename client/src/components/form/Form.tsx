interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
  className?: string;
}

export const Form = ({
  onSubmit,
  children,
  className,
}: FormProps): JSX.Element => {
  return (
    <form onSubmit={onSubmit} className={`${className} w-full flex flex-col gap-30 items-center`}>
      {children}
    </form>
  );
};
