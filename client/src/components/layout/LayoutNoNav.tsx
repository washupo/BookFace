type LayoutNoNavProps = {
  children: React.ReactNode;
};

export const LayoutNoNav = (props: LayoutNoNavProps) => {
  return (
    <div className="px-5 py-[30px] bg-brownPrimary h-screen flex flex-col items-center justify-between">
      {props.children}
    </div>
  );
};