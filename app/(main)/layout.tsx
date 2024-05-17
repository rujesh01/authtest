import { Navbar } from "./_components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

 const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-teal-500 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar/>
        {children}</div>
  );
};



export default MainLayout;