import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ItemCounter } from "../components/common";
import { FormatPrice } from "../helpers";

const CartItem = ({items, incrementProductCount, decrementProductCount, currencyObject, handleDeleteItemClick}) => {

    
  const handleCartItemDecrement = (item) => {
    decrementProductCount(item);
  };
  const handleCartItemIncrement = (item) => {
    incrementProductCount(item);
  };

  const handleDelete = (item) => {
    handleDeleteItemClick(item);
  }

  const itemsLength = items.length;

  return (
    items &&
    items.map((item, index) => {
      const { id, productName, productPrice, quantity, imgUrl } = item;
      return (
        <div
          key={id}
          className={`grid grid-flow-row grid-cols-5 p-4 my-4 border-b border-gray-400 ${itemsLength > 1 ?  index  === itemsLength - 1 ?  "md:border-0" : "" : ""}`}
        >
          <div className="col-span-2 md:col-auto">
            <Link to={"/product"}>
              <img width="100" height="100" src={imgUrl} alt={productName} />
            </Link>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col justify-between h-full flex-wrap">
              <Link className="font-bold text-xl" to={`/product/${id}`}>
                {productName}
              </Link>
              <div className="flex flex-col md:flex-row">
                <ItemCounter
                  labelClass="text-md md:my-8 md:mr-3"
                  defaultValue={quantity}
                  inCart={true}
                  onIncrement={() => handleCartItemIncrement(item)}
                  onDecrement={() => handleCartItemDecrement(item)}
                />
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-auto">
            <div className="flex flex-row flex-row-reverse py-6 md:py-0 md:flex-col justify-between h-full items-end flex-wrap">
              <Button
                icon={{
                  name: "DeleteIcon",
                  styleClass: "w-8 h-10 m-0 group-focus:text-blue-400 group-hover:text-blue-400",
                }}
                buttonStyle="silent"
                onClick={() => handleDelete(item)}
                title="Delete Item"
                className="md:py-0 md:px-0 flex flex-row w-26 flex-end justify-end"
              >
                <span className="ml-2 md:hidden text-xl font-normal">
                  Delete
                </span>
              </Button>
              <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
                <span className="mr-1">{currencyObject.symbol}</span>
                <span>{FormatPrice(productPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default CartItem;
