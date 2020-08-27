import React, { useState } from "react";
import { Button } from "./index";

const ItemCounter = ({ labelClass = null, onChange, maxLimit, defaultValue = 1 }) => {
  let [counterValue, setCounterValue] = useState(defaultValue);
  const updateParentState = () => {
    onChange(counterValue);
  };
  const handleCounterIncrease = (e) => {
    e.preventDefault();
    if(counterValue < maxLimit) {
      counterValue++;
      setCounterValue(counterValue);
    }
    setCounterValue(counterValue);
    updateParentState();
  };
  const handleCounterDecrease = (e) => {
    e.preventDefault();
    if(counterValue > 1) {
        counterValue--;
        setCounterValue(counterValue);
    }
    updateParentState();
  };
  return (
    <>
      <label className={`${labelClass ? labelClass : "text-xl"}`}>Quantity:</label>
      <div className="flex items-center my-2">
        <Button
          icon="DecreaseIcon"
          buttonStyle="silent"
          disabled={counterValue === 1}
          onClick={handleCounterDecrease}
        />
        <span className="text-gray-700 text-lg mx-2">{counterValue}</span>
        <Button
          icon="IncreaseIcon"
          buttonStyle="silent"
          disabled={counterValue === maxLimit}
          onClick={handleCounterIncrease}
        />
      </div>
    </>
  );
};

export default ItemCounter;
