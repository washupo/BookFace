interface FormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    children: React.ReactNode;
    className?: string;
}

export const Form = ({ onSubmit, children, className }: FormProps): JSX.Element => {
    return (
        <form 
        onSubmit={onSubmit}
        className={`${className} grid gap-25 w-full`}
        >
            {children}
        </form>
    )
}