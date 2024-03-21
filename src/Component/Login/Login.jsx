import Image from "../../assets/image/login_art.jpg";
import IconGoogle from "../../assets/image/Google";
import IconFacebook from "../../assets/image/Facebook";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className=" grid lg:grid-cols-2 w-full p-7  text-primary grid-cols-1">
        <div className=" flex flex-row justify-center items-center h-full ">
          <div className="max-w-[25rem]">
            <h3 className="font-medium text-4xl text-[#0c1421]  mb-5">
              Welcome Back 👋
            </h3>
            <span className="tracking-wide ">
              Today is a new day. It's your day. Your shape it. Sign in to start{" "}
              management your project
            </span>
            <form className="w-[24rem] flex flex-col gap-6 mt-12">
              <div className="flex flex-col gap-2">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Example@gmail.com"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="password">Password</label>
                <input
                  type="passsword"
                  className="input"
                  placeholder="At letest 8 characters"
                  name="password"
                />
              </div>
              <a className="text-[#2b54ea] text-right cursor-pointer">
                Forgot Password?
              </a>
              <button
                className="px-3 py-4 rounded-[16px] bg-[#162d3a] text-center text-white"
                type="submit">
                Sign in
              </button>
              <hr className="my-6" />

              <button className="flex flex-rol justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3">
                <IconGoogle />
                <span>Sign in with Google</span>
              </button>
              <button className="flex flex-rol justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3">
                <IconFacebook />
                <span>Sign in with Facebook</span>
              </button>
            </form>
            <span className="flex flex-row items-center justify-center mt-10">
              <span>Don't have an account ?</span>
              <a className="text-[#486ced] cursor-pointer">Signup</a>
            </span>
            <div className="text-center text-[#959CB6] uppercase mt-9">
              © 2023 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
        <div>
          <img src={Image} className="aspect-auto w-full" />
        </div>
      </div>
    </>
  );
};
export default Login;
