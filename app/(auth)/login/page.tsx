import CardWrapper from "@/components/auth/CardWrapper";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="">
      <CardWrapper
        footerDescription="If you don't have account? sign-In"
        footerLInk="/signin"
        title="Login Page"
        description="Login to your account"
        showSocial
      >
        <LoginForm />
      </CardWrapper>
    </div>
  );
};

export default LoginPage;
