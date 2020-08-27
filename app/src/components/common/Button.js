import React from "react";
import { Icons } from "../common";

const Button = ({ icon, children, className, disabled, buttonStyle="button", ...rest}) => {
  const ButtonIcon = icon ? Icons[icon] : null;
  let customClasses = buttonStyle === "silent" ? "px-2 text-gray-700" : "px-5 bg-black hover:bg-blue-500 focus:bg-blue-500 text-white";
  return (
    <button type="button" {...rest} className={`py-3 flex justify-between items-center text-sm font-bold rounded focus:outline-none ${customClasses} ${className}`}>
    { ButtonIcon ? <ButtonIcon disabled={disabled} /> : null }
    {children}
  </button>
  );
};

export default Button;
