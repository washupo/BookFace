type LayoutDarkProps = {
  children: React.ReactNode;
  className?: string;
};

export const LayoutDark = (props: LayoutDarkProps) => {
  return (
    <div className={`px-5 py-[30px] bg-brownPrimary h-screen flex flex-col items-center justify-between ${props.className}`}>
      {props.children}
    </div>
  );
};