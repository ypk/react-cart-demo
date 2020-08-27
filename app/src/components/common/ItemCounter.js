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
          icon="DecreaseIcon"
          buttonStyle="silent"
          disabled={counterValue === minAllowedLimit}
          onClick={handleCounterDecrease}
        />
        <span className="text-gray-700 text-lg mx-2">{counterValue}</span>
        <Button
          icon="IncreaseIcon"
          buttonStyle="silent"
          disabled={counterValue === maxAllowedLimit}
          onClick={handleCounterIncrease}
        />
      </div>
    </>
  );
};

export default ItemCounter;
