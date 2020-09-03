import React from "react";

const iconHeight = "h-6";
const iconWidth = "w-6";

const DeleteIcon = ({ className, disabled, w, h }) => {
  const disabledStyles = `cursor-not-allowed text-gray-500 ${
    h ? "h-" + h : iconHeight
  } ${w ? "w-" + w : iconWidth}`;
  return (
    <svg
      className={`fill-current ${
        disabled ? disabledStyles : className ? className : ""
      }`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.989 511.989"
      style={{ enableBackground: "new 0 0 511.989 511.989" }}
    >
      <g>
        <g>
          <path
            d="M286.159,255.997L505.734,36.422c8.341-8.341,8.341-21.823,0-30.164c-8.341-8.341-21.823-8.341-30.164,0L255.995,225.833
            L36.42,6.258c-8.341-8.341-21.823-8.341-30.164,0c-8.341,8.341-8.341,21.823,0,30.164l219.575,219.575L6.256,475.572
            c-8.341,8.341-8.341,21.823,0,30.164c4.16,4.16,9.621,6.25,15.082,6.25s10.922-2.091,15.082-6.25l219.575-219.575L475.57,505.736
            c4.16,4.16,9.621,6.25,15.082,6.25s10.922-2.091,15.082-6.25c8.341-8.341,8.341-21.823,0-30.164L286.159,255.997z"
          />
        </g>
      </g>
    </svg>
  );
};

const Icons = { DeleteIcon };

export default Icons;
