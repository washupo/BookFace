interface ButtonProps {
    name: string;
}

export const Button = ({name } : ButtonProps ): JSX.Element => {
    return (
        <>
    <button className="w-44 h-12 bg-whitePrimary rounded-sm">
    <div className=" font-fkGroteskBold text-sm text-center text-brownPrimary">
    {name}
    </div>
    </button>
    </>
    );
    };