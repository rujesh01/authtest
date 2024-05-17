import CardWrapper from "@/components/auth/CardWrapper";
import RegisterForm from "@/components/auth/RegisterForm";

const SignInPage = () => {
  return (
    <div className="">
      <CardWrapper
        footerDescription="If you have account? login"
        footerLInk="/login"
        title="Register Page"
        description="create  your account"
        showSocial

      >
        <RegisterForm />
      </CardWrapper>
    </div>
  );
};

export default SignInPage;
