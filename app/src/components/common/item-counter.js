import React, { useState } from "react";

const ItemCounter = ({
  className,
  defaultValue,
  disabled = false,
  onChange,
}) => {
  const minAllowedLimit = 0;
  return (
    <>
      <input
        className={`text-gray-700 text-center rounded-sm border border-gray-400 appearance-number ${
          className ? className : ""
        } ${
          disabled
            ? ""
            : "hover:shadow-outline active:shadow-outline focus:shadow-outline"
        }`}
        type="number"
        min={minAllowedLimit}
        max="999"
        value={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

export default ItemCounter;
