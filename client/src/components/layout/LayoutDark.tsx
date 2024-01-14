type LayoutDarkProps = {
  children: React.ReactNode;
};

export const LayoutDark = (props: LayoutDarkProps) => {
  return (
    <div className="px-5 py-[30px] bg-brownPrimary h-screen flex flex-col items-center justify-between">
      {props.children}
    </div>
  );
};