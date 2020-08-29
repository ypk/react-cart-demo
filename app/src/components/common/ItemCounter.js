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
  let minAllowedLimit = 1;

  const updateParentState = () => {
    onChange(counterValue);
  };

  const ItemCountIncrease = () => {
    counterValue++;
    setCounterValue(counterValue);
  };

  const HandleCartItemIncrease = () => {
    ItemCountIncrease();
    onIncrement();
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
    }
  };

  const HandleCartItemDecrease = () => {
    if (counterValue > minAllowedLimit) {
      counterValue--;
      setCounterValue(counterValue);
      onDecrement();
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

  return (
    <>
      <label className={`${labelClass ? labelClass : "text-xl"}`}>
        Quantity:
      </label>
      <div className="flex items-center my-2">
        <Button
          icon={{
            name: "DecreaseIcon",
            styleClass:
              "w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400",
            w: "8",
            h: "10",
          }}
          buttonStyle="silent"
          disabled={counterValue === minAllowedLimit}
          onClick={handleCounterDecrease}
        />
        <span className="text-gray-700 text-lg mx-2">{counterValue}</span>
        <Button
          icon={{
            name: "IncreaseIcon",
            styleClass:
              "w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400",
            w: "8",
            h: "10",
          }}
          buttonStyle="silent"
          disabled={counterValue === maxAllowedLimit}
          onClick={handleCounterIncrease}
        />
      </div>
    </>
  );
};

export default ItemCounter;
