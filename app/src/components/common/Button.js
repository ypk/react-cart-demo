import React from "react";
import { Icons } from "../common";

const Button = ({ icon, children, className, disabled, buttonStyle, ...rest}) => {
  const ButtonIcon = icon ? Icons[icon] : null;
  let styleClasses = (buttonStyle === "silent") ? "text-gray-700": (buttonStyle !== "button") ? "bg-black hover:bg-blue-400 focus:bg-blue-400" : "";
  return (
    <button type="button" {...rest}  className={`px-5 py-3 flex items-center text-white text-sm font-bold rounded focus:outline-none ${ButtonIcon ? 'justify-between' : ''} ${styleClasses} ${className ? className : ""}`}>
      { ButtonIcon ? <ButtonIcon disabled={disabled}/> : null }
      {children}
    </button>
  );
};

export default Button;
