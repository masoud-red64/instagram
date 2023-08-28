import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";

function Login() {
  const [usernameInputValue, setUsernameInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  return (
    <div>
      <div className="mx-auto max-w-[350px] mb-11">
        <div className="sm:border border-[#dbdbdb] mt-8 mb-2.5 py-2.5">
          <div className="mb-3 mt-9">
            <svg className="w-[175px] h-[50px] mx-auto">
              <use href="#logo-instagram"></use>
            </svg>
          </div>

          <div className="mt-6">
            <form>
              <label className="relative block h-9 bg-zinc-50 mb-1.5 mx-10 border border-[#dbdbdb] rounded-[3px]">
                <input
                  type="text"
                  className="w-full h-full pl-2 bg-transparent border-0 outline-none"
                  value={usernameInputValue}
                  onChange={(e) => setUsernameInputValue(e.target.value)}
                />
                <span
                  className={`absolute inset-0 left-2 h-full leading-9 text-neutral-500 pointer-events-none ${
                    usernameInputValue
                      ? " -translate-y-2.5 text-[11px] transition-all"
                      : "text-xs"
                  }`}
                >
                  Phone number, username, or email
                </span>
              </label>
              <label className="relative block h-9 bg-zinc-50 mb-1.5 mx-10 border border-[#dbdbdb] rounded-[3px]">
                <input
                  type={`${isShowPassword ? "text" : "password"}`}
                  className="w-full h-full pl-2 bg-transparent border-0 outline-none"
                  value={passwordInputValue}
                  onChange={(e) => setPasswordInputValue(e.target.value)}
                />
                <span
                  className={`absolute inset-0 left-2 h-full leading-9 text-neutral-500 pointer-events-none ${
                    passwordInputValue
                      ? " -translate-y-2.5 text-[11px] transition-all"
                      : "text-xs"
                  }`}
                >
                  Password
                </span>
                <button
                  type="button"
                  className="absolute right-2 top-0 bottom-0 my-auto text-sm text-neutral-800 hover:opacity-50 transition-opacity font-[600]"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? "Hide" : "Show"}
                </button>
              </label>

              <div className="h-8 mx-10 my-3.5">
                <button className="primary-btn w-full opacity-70">
                  Log in
                </button>
              </div>
            </form>
            <span className="block text-center text-xs text-[#00376b] mt-4 mb-2">
              Forgot password?
            </span>
          </div>
        </div>

        <div className="sm:border border-[#dbdbdb] py-1 mb-2.5">
          <p className="flex items-center justify-center gap-x-1 text-sm m-[15px]">
            <span>Don't have an account?</span>
            <a href="#" className="font-[600] text-[#0095f6]">
              Sign up
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center flex-col mt-4">
          <span className="text-sm text-center">Get the app.</span>
          <div className="flex items-center gap-x-2 my-3">
            <img src="/images/google-play.png" alt="" className="h-10" />
            <img src="/images/microsoft.png" alt="" className="h-10" />
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center text-center text-neutral-500 px-4">
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
