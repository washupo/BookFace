
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
      <div className={`bg-whitePrimary h-[200vh] py-20 px-30 flex flex-col items-center justify-start gap-y-30 ${className}`}>
          {children}
    </div>
  );
};
