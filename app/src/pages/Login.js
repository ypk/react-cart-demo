import React, { useState } from "react";
import { Icons } from "../components/common";
import Layout from "../components/Layout";

const Login = () => {

  const {HidePasswordIcon, ShowPasswordIcon} = Icons; 

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
  console.log(controlType)
  return (
    <Layout>
      <section className="pt-8 pb-2">
        <div className="container p-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
            Login
          </h2>
          <div className="w-full md:w-1/2 flex flex-col mx-auto">
            <h2 className="text-center w-full text-3xl font-poppins">Log into your account</h2>
            <form
              className="flex flex-col my-6"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <div className="my-6 md:p-4">
                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="text-lg text-gray-600">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      placeholder="john@doe.com"
                      required
                      onChange={handleUserEmailChange}
                      className={`${userEmailError ? 'border-red-500' : ''} h-12 shadow appearance-none border rounded outline-none focus:outline-none w-full py-2 px-3 text-gray-700 mt-1 font-sans leading-tight focus:outline-none focus:shadow-outline`}
                    />
                    {userEmailError && <p className="text-red-500  ml-2 pt-1 italic">{userEmailError}</p>}
                </div>
                <div className={`flex flex-col ${userEmailError ? "-mt-3" :"mt-8"}`}>
                  <label htmlFor="password" className="text-lg text-gray-600">
                    Password
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 right-0 flex items-center py-2 p3-2 mt-1">
                      <span
                        className="text-sm cursor-pointer"
                        onClick={toggleControlType}
                        title={controlType.label}
                      >
                        <controlType.icon className="w-6 h-6 m-2 focus:text-blue-400 hover:text-blue-400" />
                      </span>
                    </div>
                    <input
                      type={controlType.type}
                      id="password"
                      placeholder="Password"
                      required
                      onChange={handlePasswordChange}
                      className={`${passwordError ? 'border-red-500' : ''} h-12 shadow appearance-none border rounded outline-none focus:outline-none w-full py-2 px-3 text-gray-700 mt-1 font-sans leading-tight focus:outline-none focus:shadow-outline`}
                    />
                  </div>
                  {passwordError && <p className="text-red-500 pt-1 ml-2 italic">{passwordError}</p>}
                </div>
                <div className={`flex flex-col ${passwordError ? "mt-5" : "mt-12"}`}>
                  <button
                    type="submit"
                    className="bg-black w-full text-white font-bold font-poppins rounded text-lg cursor-pointer hover:bg-blue-400 p-2"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
            <div className="mb-12 md:mb-14 text-center">
              <p>
                Don't have an account?&nbsp;
                <button className="underline cursor-pointer font-semibold hover:underline hover:text-blue-400">
                  Register here
                </button>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
