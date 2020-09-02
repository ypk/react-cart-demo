import React, { useEffect, useRef } from "react";

const duration = 2500;

function Toast({ children, removeToast }) {
  const removeRef = useRef();
  removeRef.current = removeToast;

  useEffect(() => {
    const id = setTimeout(() => removeRef.current(), duration);
    return () => clearTimeout(id);
  });

  return (
    <div className="relative bg-black text-white my-2 max-w-sm shadow-xl md:max-w-xl w-full">
      <div className="absolute top-1 right-1 m-1">
        <button className="text-4xl leading-none" onClick={removeToast}>&times;</button>
      </div>
      <div className="flex p-4 ">{children}</div>
    </div>
  );
}
export default Toast;
