import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="left md:w-7/12 w-full relative pt-20 h-full flex flex-col items-center justify-center">
        <div className="md:w-[440px] w-11/12">
          <h1 className="text-3xl text-center mb-2 font-semibold">
            欢迎回来!
          </h1>
          <p className="text-sm text-secondary text-center">
            让我开始学习吧。
          </p>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
