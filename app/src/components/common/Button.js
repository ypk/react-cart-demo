import React from "react";
import { Icons } from "../common";

const Button = ({ icon, title, event = () => {} }) => {
  const ButtonIcon = icon ? Icons[icon] : null;
  return (
    <div className="my-12">
      <button onClick={event} className="px-5 py-3 flex justify-between items-center bg-black text-white text-sm font-bold rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <ButtonIcon />&nbsp;{title}
      </button>
    </div>
  );
};
export default Button;
