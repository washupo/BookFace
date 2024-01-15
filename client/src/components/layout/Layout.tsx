interface LayoutProps {
  background: "brown" | "white";
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ background, children, className }: LayoutProps) => {
  const backgroundClass =
    background === "brown" ? "bg-brownPrimary" : "bg-whitePrimary";

  return (
    <div className={`w-full h-full py-30 px-20 ${backgroundClass} ${className}`}>
      {children}
    </div>
  );
};
