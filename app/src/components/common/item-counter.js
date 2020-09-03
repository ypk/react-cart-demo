import React, { useState } from "react";

const ItemCounter = ({
  defaultValue,
  disabled = false,
  className,
  onChange,
}) => {
  let [counterValue, setCounterValue] = useState(defaultValue);

  const minAllowedLimit = 0;

  const handleQuantityChange = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    const parsedValue = !isNaN(value) && Number.parseInt(value);
    setCounterValue(parsedValue);
    onChange(counterValue);
  };

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
        value={counterValue}
        onChange={handleQuantityChange}
      />
    </>
  );
};

export default ItemCounter;
