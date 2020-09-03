import React from "react";
import { Icons } from "../common";

/**
 * @desc returns a button element
 *
 * @param string buttonStyle - distinguishes button type
 * @param object children - React children object
 * @param string className - class names to impart styles
 * @param boolean disabled - flag to disable the component
 * @param object icon - icon settings (height, width, name , styles)
 * @return object Button - a button React component
 */
const Button = ({
  buttonStyle,
  children,
  className,
  disabled,
  icon,
  ...rest
}) => {
  let styleClasses =
    buttonStyle === "silent"
      ? "text-gray-700"
      : buttonStyle !== "button"
      ? `${
          disabled
            ? "bg-black opacity-50 cursor-not-allowed"
            : "px-5 py-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600"
        }`
      : "";
  if (icon) {
    const { name, styleClass: iconStyleClass, w, h } = icon;
    const ButtonIcon = icon && Icons[name];
    return (
      <button
        type="button"
        {...rest}
        className={`flex items-center text-white text-sm font-bold rounded focus:outline-none ${
          ButtonIcon ? "justify-between" : ""
        } ${styleClasses} ${className ? className : ""} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={disabled}
      >
        {ButtonIcon ? (
          <ButtonIcon
            disabled={disabled}
            className={iconStyleClass}
            w={disabled ? w : null}
            h={disabled ? h : null}
          />
        ) : null}
        {children}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        {...rest}
        className={`px-5 py-3 flex items-center text-white text-sm font-bold rounded focus:outline-none ${styleClasses} ${
          className ? className : ""
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};

export default Button;
