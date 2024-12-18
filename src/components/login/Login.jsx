import React, { useState } from "react";
import "./login.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
const Login = () => {
  // ****** variable part
  const [showPassword, setShowPassword] = useState(false);
  // ****** function part
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="formContent">
            <div className="form">
              <form action="">
                <h1 className="formHeading">Welcome back</h1>
                <p className="formText">
                  Welcome back! Please enter your details.
                </p>
                <div className="emailSection">
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="passwordSection">
                  <label htmlFor="password">
                    Password
                    {showPassword ? (
                      <BsEye onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                      <BsEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="**********"
                  />
                </div>
                <div className="flex justify-between items-center text-sm text-gray-700">
                  {/* Remember Me Checkbox */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-600 rounded "
                    />
                    Remember me
                  </label>
                  {/* Forgot Password Link */}
                  <a
                    href="#"
                    className="text-[12px] font-Poppins font-medium text-[#181818] hover:text-[rgba(24,24,24,0.7)] transition-all duration-300 hover:underline"
                  >
                    Forgot password
                  </a>
                </div>
                <div className="flex flex-col items-center gap-4 p-4">
                  {/* Red Sign In Button */}
                  <button className=" w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-red-600 transition-all ">
                    Sign in
                  </button>
                  {/* Sign in with Google Button */}
                  <button className=" w-full flex items-center justify-center gap-2border border-gray-300 rounded-lg py-2 font-medium text-gray-700 shadow-md  hover:bg-gray-100 transition-all ">
                    <FcGoogle className="w-6 h-6" /> {/* Google Icon */}
                    Sign in with Google
                  </button>
                </div>
                <div className="signUp">
                  <p className="signUpText">
                    Don’t have an account? <Link to="/signup"> Sign up fo free!</Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="sideImage">
              <img src="/images/Right_Side.png" alt="Side image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
