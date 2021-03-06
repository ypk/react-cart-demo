import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ItemCounter } from "../components/common";
import { NormalizeSlug, FormatPrice, Logger } from "../helpers";
import useToast from "../hooks/useToast";

const CartItem = ({
  incrementCount,
  decrementCount,
  currencyObject,
  handleDeleteItemClick,
  cartData,
  updateCount,
}) => {
  const toast = useToast();
  const [itemValue, setItemValue] = useState(null);
  const [itemValueChanged, setItemValueChanged] = useState(false);
  const handleCartItemDecrement = (id) => {
    decrementCount(id);
  };
  const handleCartItemIncrement = (id) => {
    incrementCount(id);
  };
  const handleDelete = (id) => {
    handleDeleteItemClick(id);
  };
  const {
    id,
    productName,
    productPrice,
    quantity,
    imgUrl,
    quantityAvailable,
  } = cartData;

  const handleItemCounterValueUpdate = (itemCount) => {
    setItemValue(itemCount);
    setItemValueChanged(true);
  };

  const handleUpdateCartBtnClick = (e) => {
    e.preventDefault();
    if (itemValueChanged) {
      updateCount(itemValue, id);
      setItemValueChanged(false);
    }
    const message = "Item updated";
    toast.addToast(message);
    Logger.info(message);
  };
  return (
    <div className="grid grid-flow-row grid-cols-5 p-4 my-4 border-b border-gray-400">
      <div className="col-auto">
        <Link to={`/product/${NormalizeSlug(id)}`}>
          <img className="w-3/4 h-1/2" src={imgUrl} alt={productName} />
        </Link>
      </div>
      <div className="col-span-3">
        <div className="flex flex-col justify-between h-full flex-wrap">
          <Link
            className="font-bold text-xl mb-8"
            to={`/product/${NormalizeSlug(id)}`}
          >
            {productName}
          </Link>
          <div className="flex flex-col md:flex-row">
            <div className="item-counter">
              <ItemCounter
                labelClass="text-md md:my-8 md:mr-3"
                defaultValue={quantity}
                inCart={true}
                onIncrement={() => handleCartItemIncrement(id)}
                onDecrement={() => handleCartItemDecrement(id)}
                maxAllowedLimit={quantityAvailable}
                onChange={handleItemCounterValueUpdate}
              />
            </div>
            {itemValueChanged && (
              <div className="self-center pb-8 pt-10 my-1  mx-4">
                <Button
                  onClick={(id, itemCount) =>
                    handleUpdateCartBtnClick(id, itemCount, quantityAvailable)
                  }
                  className="h-12"
                  disabled={itemValue > quantityAvailable}
                >
                  Update
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-5 md:col-auto">
        <div className="flex flex-row flex-row-reverse py-6 md:py-0 md:flex-col justify-between h-full items-end flex-wrap">
          <Button
            icon={{
              name: "DeleteIcon",
              styleClass:
                "w-4 h-6 md:w-8 md:h-10 m-0 group-focus:text-blue-400 group-hover:text-blue-400",
            }}
            onClick={() => handleDelete(id)}
            buttonStyle="silent"
            title="Delete Item"
            className="group md:py-0 md:px-0 flex flex-row w-26 flex-end justify-end"
          >
            <span className="ml-2 md:hidden text-xl font-normal group-focus:text-blue-400 group-hover:text-blue-400">
              Delete
            </span>
          </Button>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
            <span>{currencyObject.symbol}</span>
            <span>{FormatPrice(productPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
