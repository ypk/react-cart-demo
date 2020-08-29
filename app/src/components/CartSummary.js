import React from "react";
import { FormatPrice } from "../helpers";

const CartSummary = ({ itemsForGrid, totalPrice, totalPriceVAT, currencyObject, vatObject }) => {
  return (
    <>
      <div className={`grid grid-flow-row grid-cols-5 md:grid-rows-${ Number.parseInt(itemsForGrid) + 1 }`}>
        <div className="col-span-3">
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            Amount
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            VAT
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            Total
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            <span className="mr-1">{currencyObject.symbol}</span>
            <span>{FormatPrice(totalPrice)}</span>
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            <span>{vatObject.vatRate}%</span>
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            <span className="mr-1">{currencyObject.symbol}</span>
            <span>{FormatPrice(totalPriceVAT)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
