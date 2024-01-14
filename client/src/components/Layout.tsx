
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
      <div className="bg-whitePrimary w-full h-full">
          {/* <Header /> */}
          <main className="w-full py-20 px-30">{children}</main>
          {/* <Footer/> */}
    </div>
  );
};
