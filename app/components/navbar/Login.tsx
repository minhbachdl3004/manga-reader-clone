import React from "react";
import { poppins } from "./Menu";
import Input from "./Input";

interface Props {
  open: boolean;
  handleChange: (e: any) => void;
}

const Login = ({ open, handleChange }: Props) => {
  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-blur opacity-100 transition-fade ${
        open ? "" : "hidden"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          className={`relative w-full max-w-[500px] max-h-[calc(100%-3.5rem)] ${poppins.className}`}
        >
          {/* <!-- Modal content --> */}
          <div className="relative bg-[#2f2f2f] shadow rounded-[20px]">
            <button
              type="button"
              className="absolute top-0 right-0 w-[40px] h-[40px] rounded-tr-[20px] text-center rounded-bl-[20px] text-white bg-[#3f3f3f] flex justify-center items-center"
              data-modal-hide="authentication-modal"
              onClick={handleChange}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">
                Welcome back!
              </h3>
              <form className="space-y-6 px-[20px]" action="#">
                <Input label="Email address" placeHolder="name@email.com" name="email"/>
                <Input label="password" placeHolder="Password" name="password"/>
                
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 rounded-[8px]"
                        required
                      />
                      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-[14px] text-[#c49bff]"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-[#111111] bg-[#c49bff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[8px] text-sm p-[.75rem] text-center mt-[1.5rem] mb-[0.5rem]"
                >
                  Sign-in
                </button>
                <div className="text-[14px] font-medium text-[#DDDDDD] text-center pt-[20px] pb-[10px]">
                  {`Don't have an account?`}{" "}
                  <a
                    href="#"
                    className="text-[#c49bff]"
                  >
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
