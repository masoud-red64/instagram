import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";

function Register() {
  const [phoneNumberAndEmailInputValue, setPhoneNumberAndEmailInputValue] =
    useState<string>("");
  const [fullNameInputValue, setFullNameInputValue] = useState<string>("");
  const [usernameInputValue, setUsernameInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const gmailEmailRegex: RegExp = /^[\w\.-]+@gmail\.com$/;

  const phoneNumberRegex: RegExp = /^(\+98|0)?9\d{9}$/;

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
            <div className=" text-center mx-10 mb-2.5">
              <span className="text-neutral-500 font-[600]">
                Sign up to see photos and videos from your friends.
              </span>
            </div>
            <form>
              <label className="relative block h-9 bg-zinc-50 mb-1.5 mx-10 border border-[#dbdbdb] rounded-[3px]">
                <input
                  type="text"
                  className="w-full h-full pl-2 bg-transparent border-0 outline-none"
                  value={phoneNumberAndEmailInputValue}
                  onChange={(e) =>
                    setPhoneNumberAndEmailInputValue(e.target.value)
                  }
                />
                <span
                  className={`absolute inset-0 left-2 h-full leading-9 text-neutral-500 pointer-events-none ${
                    phoneNumberAndEmailInputValue
                      ? " -translate-y-2.5 text-[11px] transition-all"
                      : "text-xs"
                  }`}
                >
                  Mobile Number or Email
                </span>
                {phoneNumberAndEmailInputValue && (
                  <div className="absolute right-2 top-0 bottom-0 flex items-center">
                    {phoneNumberRegex.test(phoneNumberAndEmailInputValue) ||
                    gmailEmailRegex.test(phoneNumberAndEmailInputValue) ? (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-225px_-333px]"></span>
                    ) : (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-249px_-333px]"></span>
                    )}{" "}
                  </div>
                )}
              </label>
              <label className="relative block h-9 bg-zinc-50 mb-1.5 mx-10 border border-[#dbdbdb] rounded-[3px]">
                <input
                  type="text"
                  className="w-full h-full pl-2 bg-transparent border-0 outline-none"
                  value={fullNameInputValue}
                  onChange={(e) => setFullNameInputValue(e.target.value)}
                />
                <span
                  className={`absolute inset-0 left-2 h-full leading-9 text-neutral-500 pointer-events-none ${
                    fullNameInputValue
                      ? " -translate-y-2.5 text-[11px] transition-all"
                      : "text-xs"
                  }`}
                >
                  Full Name
                </span>

                {fullNameInputValue && (
                  <div className="absolute right-2 top-0 bottom-0 flex items-center">
                    {fullNameInputValue.length > 2 ? (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-225px_-333px]"></span>
                    ) : (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-249px_-333px]"></span>
                    )}{" "}
                  </div>
                )}
              </label>
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
                  Username
                </span>

                {usernameInputValue && (
                  <div className="absolute right-2 top-0 bottom-0 flex items-center gap-x-2">
                    {usernameInputValue.length > 5 ? (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-225px_-333px]"></span>
                    ) : (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-249px_-333px]"></span>
                    )}{" "}
                    <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-273px_-333px]"></span>
                  </div>
                )}
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
                {passwordInputValue && (
                  <div className="absolute right-2 top-0 bottom-0 flex items-center gap-x-2">
                    {passwordInputValue.length > 7 ? (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-225px_-333px]"></span>
                    ) : (
                      <span className="block w-[22px] h-[22px] bg-icons bg-no-repeat bg-[-249px_-333px]"></span>
                    )}{" "}
                    <button
                      type="button"
                      className="text-sm text-neutral-800 hover:opacity-50 transition-opacity font-[600]"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                    >
                      {isShowPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                )}
              </label>

              <div className="flex flex-col gap-y-4 mx-10 text-xs/4 text-neutral-500 text-center">
                <span>
                  People who use our service may have uploaded your contact
                  information to Instagram.{" "}
                  <a href="#" className="text-[#00376b]">
                    Learn More
                  </a>
                </span>
                <span>
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-[#00376b]">
                    Terms
                  </a>
                  . Learn how we collect, use and share your data in our{" "}
                  <a href="#" className="text-[#00376b]">
                    Privacy Policy
                  </a>
                  and how we use cookies and similar technology in our{" "}
                  <a href="#" className="text-[#00376b]">
                    Cookies Policy
                  </a>
                  .
                </span>
              </div>

              <div className="h-8 mx-10 my-3.5">
                <button
                  className={`primary-btn w-full ${
                    (phoneNumberRegex.test(phoneNumberAndEmailInputValue) ||
                      gmailEmailRegex.test(phoneNumberAndEmailInputValue)) &&
                    fullNameInputValue.length > 2 &&
                    usernameInputValue.length > 5 &&
                    passwordInputValue.length > 7
                      ? ""
                      : "opacity-70"
                  }`}
                  disabled={
                    (!phoneNumberRegex.test(phoneNumberAndEmailInputValue) &&
                      !gmailEmailRegex.test(phoneNumberAndEmailInputValue)) ||
                    fullNameInputValue.length < 2 ||
                    usernameInputValue.length < 5 ||
                    passwordInputValue.length < 7
                  }
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="sm:border border-[#dbdbdb] py-1 mb-2.5">
          <p className="flex items-center justify-center gap-x-1 text-sm m-[15px]">
            <span>Have an account?</span>
            <a href="#" className="font-[600] text-[#0095f6]">
              Log in
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

      <footer className="flex items-center justify-center text-center text-neutral-500 px-4 mb-5">
        <Footer />
      </footer>
    </div>
  );
}

export default Register;
