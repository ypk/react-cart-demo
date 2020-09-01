import React, { useState } from "react";
import { Button } from "./index";

const ItemCounter = ({
  labelClass = null,
  inCart = false,
  onChange,
  onIncrement,
  onDecrement,
  maxAllowedLimit,
  defaultValue = 1,
}) => {
  let [counterValue, setCounterValue] = useState(defaultValue);
  const [invalidQuantityErrorMessage, setInvalidQuantityErrorMessage] = useState(null);
  const minAllowedLimit = 1;

  const updateParentState = () => {
    onChange(counterValue);
  };

  const ItemCountIncrease = () => {
    counterValue++;
    setCounterValue(counterValue);
  };

  const HandleCartItemIncrease = () => {
    if (counterValue < maxAllowedLimit) {
      ItemCountIncrease();
      onIncrement();  
    } 
  };

  const HandlePDPItemIncrease = () => {
    if (counterValue < maxAllowedLimit) {
      ItemCountIncrease();
      updateParentState();
    } 
  };

  const HandlePDPItemDecrease = () => {
    if (counterValue > minAllowedLimit) {
      counterValue--;
      setCounterValue(counterValue);
      updateParentState();
      if(counterValue <= maxAllowedLimit) {
        setInvalidQuantityErrorMessage(null);
      }
    }
  };

  const HandleCartItemDecrease = () => {
    if (counterValue > minAllowedLimit) {
      counterValue--;
      setCounterValue(counterValue);
      onDecrement();
      if(counterValue <= maxAllowedLimit) {
        setInvalidQuantityErrorMessage(null);
      }
    }
  };

  const handleCounterDecrease = (e) => {
    e.preventDefault();
    if (!inCart) {
      HandlePDPItemDecrease();
    } else {
      HandleCartItemDecrease();
    }
  };

  const handleCounterIncrease = (e) => {
    e.preventDefault();
    if (!inCart) {
      HandlePDPItemIncrease();
    } else {
      HandleCartItemIncrease();
    } 
  };

  const handleQuantityChange = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    const parsedValue = !isNaN(value) && Number.parseInt(value);
    if (parsedValue && parsedValue > minAllowedLimit) {
      setInvalidQuantityErrorMessage(null);
      setCounterValue(parsedValue);
    }
  };

  const handleCounterValidation = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    const parsedValue = !isNaN(value) && Number.parseInt(value);
    if (parsedValue > maxAllowedLimit) {
      setInvalidQuantityErrorMessage("Sorry, that quantity exceeds the maximum allowed limit for this purchase.");
    }else {
      setInvalidQuantityErrorMessage(null);
    }
    updateParentState();
  }

  return (
    <>
      <label className={`${labelClass ? labelClass : "text-xl"}`}>
        Quantity:
      </label>
      <div className="flex items-center my-3">
        <Button
          icon={{
            name: "DecreaseIcon",
            styleClass:
              "w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400",
            w: "8",
            h: "10",
          }}
          buttonStyle="silent"
          className="group px-0"
          disabled={counterValue === minAllowedLimit}
          onClick={handleCounterDecrease}
        />
        <input
          className="text-gray-700 text-lg w-1/2 md:w-20 p-3 text-center md:h-12 md:mx-2 rounded-md border border-gray-400 hover:shadow-outline active:shadow-outline focus:shadow-outline appearance-number"
          type="number"
          min={minAllowedLimit}
          max="999"
          value={counterValue}
          onChange={handleQuantityChange}
          onBlur={handleCounterValidation}
        />
        <Button
          icon={{
            name: "IncreaseIcon",
            styleClass:
              "w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400",
            w: "8",
            h: "10",
          }}
          buttonStyle="silent"
          className="group"
          disabled={counterValue === maxAllowedLimit}
          onClick={handleCounterIncrease}
        />
      </div>
        {invalidQuantityErrorMessage && <p className={`text-red-500 h-12 md:h-6`}>{invalidQuantityErrorMessage}</p>}
    </>
  );
};

export default ItemCounter;
