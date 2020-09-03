import React, { useState } from "react";
import { Button } from "./index";

const ItemCounter = ({
  labelClass = null,
  maxAllowedLimit,
  defaultValue,
  disabled = false,
}) => {
  let [counterValue, setCounterValue] = useState(defaultValue);

  const minAllowedLimit = 1;

  const handleQuantityChange = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    const parsedValue = !isNaN(value) && Number.parseInt(value);

    //TODO: Implment Counter Validation
  };

  return (
    <>
      <label className={`${labelClass ? labelClass : "text-xl"}`}>
        Quantity:
      </label>
      <div className="flex items-center my-3">
        <input
          className={`text-gray-700 text-lg w-1/2 md:w-20 p-3 text-center md:h-12 md:mx-2 rounded-md border border-gray-400 appearance-number ${
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
      </div>
    </>
  );
};

export default ItemCounter;
