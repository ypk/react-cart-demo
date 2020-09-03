import React from "react";
/**
 * @desc renders an input element
 *
 * @param string|number defaultValue - value for the input element
 * @param object onChange - function to handle a "change" event
 * @param string className - class names to impart styles
 * @param boolean disabled - flag to disable the component
 * @return object ItemCounter - a item counter React component
 */
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
        aria-label="Item Quantity"
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
