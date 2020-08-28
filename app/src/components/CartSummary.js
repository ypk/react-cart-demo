import React, { useContext, useState } from "react";
import { FormatPrice } from "../helpers";

const CartSummary = ({ totalPrice, totalPriceVAT, currencyObject }) => {
  return (
    <>
      <div className="grid grid-flow-row grid-cols-5 p-4">
        <div className="col-span-3">
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
            Amount
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
            VAT
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
            Total
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
            <span className="mr-1">{currencyObject.symbol}</span>
            <span>{FormatPrice(totalPrice)}</span>
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
            <span>{FormatPrice(currencyObject.code)}</span>
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
            <span className="mr-1">{currencyObject.symbol}</span>
            <span>{FormatPrice(totalPriceVAT)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
