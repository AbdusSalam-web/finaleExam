import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import "./Registration.css";
import { Slide, toast } from "react-toastify";
const Registration = () => {
  // ****** variable part
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // ****** firebase variable
  const auth = getAuth();
  // ****** function part
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPasswordError("");
    if (!name) {
      setNameError("Name is blank!");
    }
    if (!email) {
      setEmailError("Email is blank!");
    }
    if (!password) {
      setPasswordError("Password is blank!");
    }
    if (name && email && password) {
      // ****** creating the user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("🚀 ~ .then ~ user:", user);
          toast.success("Registration successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          // Reset input fields
          setName("");
          setEmail("");
          setPassword("");
          console.log(name, email, password);
          
          // ****** sendig the varification email
          sendEmailVerification(auth.currentUser).then(() => {
            toast.success("Email verification sent!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          });
          // ****** user profile updation part
          updateProfile(auth.currentUser, {
            displayName: name,
            userEmail: email,
            UID: user.uid,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("🚀 ~ handleSubmit ~ errorCode:", errorCode);
          // ****** showing the error message if the email is invalid
          if (errorCode === "auth/invalid-email") {
            toast.error("invalid-email!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          }
          // ****** showing the error message if the eamil is already taken.
          if (errorCode === "auth/email-already-in-use") {
            toast.error("Email alredy in use!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          }
          if (errorCode === "auth/weak-password") {
            // ****** showign the error message if the password is weak
            toast.error("Weak password!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          }
        });
    }
  };

  return (
    <>
      <section className="registration">
        <div className="container">
          <div className="formContent">
            <div className="form">
              <form action="">
                <h1 className="formHeading">Sign up for free</h1>
                <p className="formText">Please enter your details.</p>
                <div className="nameSection">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder={nameError || "Enter your name"}
                    onChange={(e) => setName(e.target.value)}
                    className={nameError && "error"}
                  />
                </div>
                <div className="emailSection">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder={emailError || "Enter your email"}
                    onChange={(e) => setEmail(e.target.value)}
                    className={emailError && "error"}
                  />
                </div>
                <div className="passwordSection">
                  <label htmlFor="password">
                    Password
                    {showPassword ? (
                      <BsEye
                        aria-label="Show password"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPassword(!showPassword);
                        }}
                      />
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
                    placeholder={passwordError || "**********"}
                    onChange={(e) => setPassword(e.target.value)}
                    className={passwordError && "error"}
                  />
                </div>
                <div className="flex flex-col items-center gap-4 p-4">
                  {/* Red Sign In Button */}
                  <button
                    className=" w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-red-600 transition-all "
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                  {/* Sign in with Google Button */}
                  <button className=" w-full flex items-center justify-center gap-2border border-gray-300 rounded-lg py-2 font-medium text-gray-700 shadow-md  hover:bg-gray-100 transition-all ">
                    <FcGoogle className="w-6 h-6 pr-[5px]" />{" "}
                    {/* Google Icon */}
                    Sign in with Google
                  </button>
                </div>
                <div className="signUp">
                  <p className="signUpText">
                    Already have an account? <Link to="/login"> Log in</Link>
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

export default Registration;
