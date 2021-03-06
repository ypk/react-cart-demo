import React from "react";
import { Icons } from "../common";

const Button = ({ icon, children, className, disabled, buttonStyle, ...rest}) => {

  let styleClasses = (buttonStyle === "silent") ? "text-gray-700": (buttonStyle !== "button") ? `${disabled ? "bg-black opacity-50 cursor-not-allowed": "bg-black hover:bg-blue-400 focus:bg-blue-400"}` : "";
  if (icon) {
    const { name, styleClass: iconStyleClass, w, h } = icon;
    const ButtonIcon = icon && Icons[name];
    return (
      <button type="button" {...rest}  className={`px-5 py-3 flex items-center text-white text-sm font-bold rounded focus:outline-none ${ButtonIcon ? 'justify-between' : ''} ${styleClasses} ${className ? className : ""} ${disabled ? "opacity-50 cursor-not-allowed": ""}`} disabled={disabled}>
        { ButtonIcon ? <ButtonIcon disabled={disabled} className={iconStyleClass} w={ disabled ? w : null } h={ disabled ? h : null } /> : null }
        {children}
      </button>
    )
  } else {
    return (
      <button type="button" {...rest} className={`px-5 py-3 flex items-center text-white text-sm font-bold rounded focus:outline-none ${styleClasses} ${className ? className : ""} ${disabled ? "opacity-50 cursor-not-allowed": ""}`} disabled={disabled}>
        {children}
      </button>
    )
  }
};

export default Button;
