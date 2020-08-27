import React from "react";
import { Icons } from "../common";

const Button = ({ icon, children, silent, ...rest}) => {
  const ButtonIcon = icon ? Icons[icon] : null;
  return (
    <div className="my-12">
      <button {...rest} className={`px-5 py-3 flex justify-between items-center text-sm font-bold rounded focus:outline-none ${!silent ? "bg-black hover:bg-blue-500 focus:bg-blue-500 text-white": "cursor-not-allowed text-gray-700"}`}>
        { ButtonIcon ? <ButtonIcon /> : null }
        &nbsp;{children}
      </button>
    </div>
  );
};

export default Button;
