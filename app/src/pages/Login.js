import React, { useState, useRef } from "react";
import { Loading, PasswordIcons } from "../components/common";
import Layout from "../components/Layout";

const Login = () => {

  const {HidePasswordIcon, ShowPasswordIcon} = PasswordIcons; 

  const [controlType, setControlType] = useState({
    type: "password",
    icon: ShowPasswordIcon,
    label: "Show Password",
  });
  const [userEmail, setUserEmail] = useState(null);
  const [userEmailError, setUserEmailError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  
  const handleUserEmailChange = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    value && setUserEmail(value);
    userEmailError && setUserEmailError(null);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const { value } =  e.currentTarget;
    value && setPassword(value);
    passwordError && setPasswordError(null);
  };

  const validateForm = () => {
    let hasError = false;
    if (!userEmail) {
      hasError = true;
      setUserEmailError("Please enter your email");
    }
    if (!password) {
      setPasswordError("Please enter your password");
      hasError = true;
    }
    return hasError;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isFormInValid = validateForm();
    if(!isFormInValid){
      initiateLogin();
    }
    return false;
  };

  const initiateLogin = () => {
    const payload = {
      userEmail,
      password
    };

    alert(`This form will now serialize the data and try to send it to a server\n\nThe data being sent is: ${JSON.stringify(payload)}`)
  };

  const toggleControlType = (e) => {
    e.preventDefault();
    if (controlType.type === "password") {
      setControlType({ type: "text", icon:  HidePasswordIcon, label: "Hide Password" });
    } else if (controlType.type === "text") {
      setControlType({ type: "password", icon: ShowPasswordIcon, label: "Show Password" });
    }
  };
  return (
    <Layout>
      <section className="pt-8 pb-2">
        <div className="container py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
            Login
          </h2>
          <div className="w-full md:w-1/2 flex flex-col mx-auto">
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <p className="text-center w-full mb-6">Log into your account</p>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="john@doe.com"
                    required
                    onChange={handleUserEmailChange}
                    className={`${userEmailError ? 'border-red-500' : ''} shadow appearance-none border rounded outline-none focus:outline-none w-full py-2 px-3 text-gray-700 mt-1 font-sans leading-tight focus:outline-none focus:shadow-outline`}
                  />
                  {userEmailError && <p className="text-red-500">{userEmailError}</p>}
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>

                <div className="relative w-full">
                  <div className="absolute inset-y-0 right-0 flex items-center py-2 p3-2 mt-1">
                    <span
                      className="px-2 py-1 text-sm cursor-pointer"
                      onClick={toggleControlType}
                      title={controlType.label}
                    >
                      <controlType.icon />
                    </span>
                  </div>
                  <input
                    type={controlType.type}
                    id="password"
                    placeholder="Password"
                    required
                    onChange={handlePasswordChange}
                    className={`${passwordError ? 'border-red-500' : ''} shadow appearance-none border rounded outline-none focus:outline-none w-full py-2 px-3 text-gray-700 mt-1 font-sans leading-tight focus:outline-none focus:shadow-outline`}
                  />
                </div>
                {passwordError && <p className="text-red-500">{passwordError}</p>}
              </div>
              <button
                type="submit"
                className="bg-black text-white font-bold font-cinzel text-lg cursor-pointer hover:bg-blue-400 p-2 mt-8"
              >Log In
              </button>
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?&nbsp;
                <a className="underline cursor-pointer font-semibold hover:underline hover:text-blue-400">
                  Register here
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
