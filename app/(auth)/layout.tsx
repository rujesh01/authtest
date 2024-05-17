interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps)  => {
    return ( 
    <div className="absolute flex  justify-center inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
       
            {children}
        </div>
     );
}
 
export default AuthLayout;