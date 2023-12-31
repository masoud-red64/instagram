import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { login } from "../store/authSlice";
import { setLoading } from "../store/loadingSlice";
import { toast } from "react-toastify";

function Login() {
  const [usernameInputValue, setUsernameInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [isShowSpinnerLoading, setIsShowSpinnerLoading] =
    useState<boolean>(false);

  const authSelector = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setLoading(true));
    setIsShowSpinnerLoading(true);
    setTimeout(() => {
      dispatch(setLoading(false));
      setIsShowSpinnerLoading(false);
    }, 2000);

    if (
      usernameInputValue !== "masoud_red64" ||
      passwordInputValue !== "123456"
    ) {
      setTimeout(() => {
        setIsShowError(true);
        toast("check password or username again...", {
          type: "error",
          autoClose: 2000,
          pauseOnHover: false,
          theme: "light",
        });
      }, 2000);
    } else {
      setTimeout(() => {
        setIsShowError(false);
        toast("login successfully...", {
          type: "success",
          autoClose: 2000,
          pauseOnHover: false,
          theme: "light",
        });
      }, 2000);
    }

    dispatch(
      login({ username: usernameInputValue, password: passwordInputValue })
    );
  };

  useEffect(() => {
    if (authSelector.isLogin) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [authSelector.isLogin]);

  return (
    <div>
      <div className="mx-auto max-w-[350px] mb-11">
        <div className="sm:border border-[#dbdbdb] dark:border-[#363636] mt-8 mb-2.5 py-2.5">
          <div className="mb-3 mt-9">
            <svg className="w-[175px] h-[50px] mx-auto dark:text-neutral-100">
              <use href="#logo-instagram"></use>
            </svg>
          </div>

          <div className="mt-6">
            <form onSubmit={loginHandler}>
              <label className="relative block h-9 bg-zinc-50 dark:bg-neutral-800 mb-1.5 mx-10 border border-[#dbdbdb] dark:border-[#363636] rounded-[3px]">
                <input
                  type="text"
                  className="w-full h-full dark:text-neutral-100 pl-2 bg-transparent border-0 outline-none"
                  value={usernameInputValue}
                  onChange={(e) => setUsernameInputValue(e.target.value)}
                  onFocus={() => {
                    const localStorageDate = localStorage.getItem("user");
                    if (localStorageDate !== null) {
                      const userInfo = JSON.parse(localStorageDate);
                      setUsernameInputValue(userInfo.username);
                      setPasswordInputValue(userInfo.password);
                    }
                  }}
                />
                <span
                  className={`absolute inset-0 left-2 h-full leading-9 text-neutral-500 dark:text-[#a8a8a8] pointer-events-none ${
                    usernameInputValue
                      ? " -translate-y-2.5 text-[11px] transition-all"
                      : "text-xs"
                  }`}
                >
                  Phone number, username, or email
                </span>
              </label>
              <label className="relative block h-9 bg-zinc-50 dark:bg-neutral-800 mb-1.5 mx-10 border border-[#dbdbdb] dark:border-[#363636] rounded-[3px]">
                <input
                  type={`${isShowPassword ? "text" : "password"}`}
                  className="w-full h-full dark:text-neutral-100 pl-2 bg-transparent border-0 outline-none"
                  value={passwordInputValue}
                  onChange={(e) => setPasswordInputValue(e.target.value)}
                />
                <span
                  className={`absolute inset-0 left-2 h-full leading-9 text-neutral-500 dark:text-[#a8a8a8] pointer-events-none ${
                    passwordInputValue
                      ? " -translate-y-2.5 text-[11px] transition-all"
                      : "text-xs"
                  }`}
                >
                  Password
                </span>
                <button
                  type="button"
                  className="absolute right-2 top-0 bottom-0 my-auto text-sm text-neutral-800 dark:text-neutral-100 hover:opacity-50 transition-opacity font-[600]"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? "Hide" : "Show"}
                </button>
              </label>

              <div className="h-8 mx-10 my-3.5">
                <button
                  className={`primary-btn w-full ${
                    usernameInputValue &&
                    passwordInputValue.length > 5 &&
                    !isShowSpinnerLoading
                      ? ""
                      : "opacity-70"
                  }`}
                  disabled={
                    usernameInputValue.length === 0 ||
                    passwordInputValue.length < 5 ||
                    isShowSpinnerLoading
                  }
                >
                  {isShowSpinnerLoading ? (
                    <div className="lds-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>

              {isShowError && (
                <div className="mx-10 my-3.5 text-center leading-3">
                  <span className="text-sm text-[#ed4956]">
                    Sorry, your password or username was incorrect. Please
                    double-check your information.
                  </span>
                </div>
              )}
            </form>
            <span className="block text-center text-xs text-[#00376b] dark:text-[#0095f6] mt-4 mb-2">
              Forgot password?
            </span>
          </div>
        </div>

        <div className="sm:border border-[#dbdbdb] dark:border-[#363636] py-1 mb-2.5">
          <p className="flex items-center justify-center gap-x-1 text-sm m-[15px]">
            <span className="dark:text-neutral-100">
              Don't have an account?
            </span>
            <Link to="/register" className="font-[600] text-[#0095f6]">
              Sign up
            </Link>
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

      <footer className="flex items-center justify-center text-center text-neutral-500 dark:text-[#a8a8a8] px-4">
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
