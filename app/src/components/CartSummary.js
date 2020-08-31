import React, { useContext } from "react";
import { PreferencesContext, CartContext } from "../contexts";
import { FormatPrice } from "../helpers";

const CartSummary = () => {
  const preferencesContext = useContext(PreferencesContext);
  const cartContext = useContext(CartContext);
  const { items, totalPrice, totalPriceVAT } = cartContext;
  const { userPreferences } = preferencesContext;
  const { currencyData, VATData } = userPreferences;
  const cartSize = items.length;

  return items && items.length > 0 ? (
    <>
      <div
        className={`grid grid-flow-row grid-cols-5 md:grid-rows-${
          Number.parseInt(cartSize) + 1
        }`}
      >
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
            <span className="mr-1">{currencyData.symbol}</span>
            <span>{FormatPrice(totalPrice)}</span>
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            <span>{VATData.vatRate}%</span>
          </div>
          <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row justify-end pr-3">
            <span className="mr-1">{currencyData.symbol}</span>
            <span>{FormatPrice(totalPriceVAT)}</span>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default CartSummary;
