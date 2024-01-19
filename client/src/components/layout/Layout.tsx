interface LayoutProps {
  background: "brown" | "white";
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ background, children, className }: LayoutProps) => {
  const backgroundClass =
    background === "brown" ? "bg-brownPrimary" : "bg-whitePrimary";

  return (
    <div className={`${backgroundClass} ${className}`}>
      {children}
    </div>
  );
};
