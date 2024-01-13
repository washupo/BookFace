import { NavBar } from "./NavBar";

type LayoutNavProps = {
  children: React.ReactNode;
};

export const LayoutNav = (props: LayoutNavProps) => {
  return (
    <>
    <div className="px-5 py-[30px] bg-whitePrimary min-h-screen flex flex-col items-center justify-between">
      {props.children}
    </div>
    <NavBar className="!absolute w-full !h-20 !bottom-0" />
    </>
  );
};

