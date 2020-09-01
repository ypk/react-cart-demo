import React from "react";
import { Link } from "react-router-dom";
import { Button, ItemCounter } from "../components/common";
import { NormalizeSlug, FormatPrice } from "../helpers";

const CartItem = ({
  incrementCount,
  decrementCount,
  currencyObject,
  handleDeleteItemClick,
  cartData
}) => {

  const handleCartItemDecrement = (id) => {
    decrementCount(id);
  };
  const handleCartItemIncrement = (id) => {
    incrementCount(id);
  };

  const handleDelete = (id) => {
    handleDeleteItemClick(id);
  };

  const { id, productName, productPrice, quantity, imgUrl } = cartData;
  return (
    <div
      className="grid grid-flow-row grid-cols-5 p-4 my-4 border-b border-gray-400"
    >
      <div className="col-span-2 md:col-auto">
        <Link to={`/product/${NormalizeSlug(id)}`}>
          <img width="100" height="100" src={imgUrl} alt={productName} />
        </Link>
      </div>
      <div className="col-span-3">
        <div className="flex flex-col justify-between h-full flex-wrap">
          <Link className="font-bold text-xl" to={`/product/${NormalizeSlug(id)}`}>
            {productName}
          </Link>
          <div className="flex flex-col md:flex-row">
            <ItemCounter
              labelClass="text-md md:my-8 md:mr-3"
              defaultValue={quantity}
              inCart={true}
              onIncrement={() => handleCartItemIncrement(id)}
              onDecrement={() => handleCartItemDecrement(id)}
            />
          </div>
        </div>
      </div>
      <div className="col-span-5 md:col-auto">
        <div className="flex flex-row flex-row-reverse py-6 md:py-0 md:flex-col justify-between h-full items-end flex-wrap">
          <Button
            icon={{
              name: "DeleteIcon",
              styleClass: "w-4 h-6 md:w-8 md:h-10 m-0 group-focus:text-blue-400 group-hover:text-blue-400",
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
