import React from "react";
import { ItemCounter } from "../index";
import { Button } from "../common";
import { FormatPrice, Logger } from "../../helpers";
/**
 * @desc returns a cart component
 *
 * @return object cartContext - cart context
 * @return object Cart - a cart React component
 */
const Cart = ({ cartContext }) => {
  const {
    itemsTotalPrice,
    productCurrency,
    items,
    removeProduct,
    updateProduct,
    clearCart,
  } = cartContext;

  const handleProductQuantityChange = (productId, event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    if (!isNaN(value)) {
      Logger.log("updating item");
      updateProduct(productId, value);
    }
  };

  const handleItemDeleteBtnClick = (productId) => {
    Logger.log("deleting item");
    removeProduct(productId);
  };

  const handleCartClearBtnClick = () => {
    Logger.log("clearing cart");
    clearCart();
  };

  const handleCartCheckoutBtnClick = () => {
    Logger.log("cart checkout");
    clearCart();
  };

  const itemsLength = items.length;

  return (
    <div className="bg-white rounded max-w-sm border-2 shadow-sm border-timberwolf-500">
      <table className="table-auto m-6 mb-0">
        <tbody>
          {items.map((item, index) => {
            const {
              productId,
              productName,
              productPrice,
              productQuantity,
            } = item;
            return (
              <tr
                className={`${
                  index !== itemsLength - 1 ? "border-b-2 border-dashed" : ""
                }`}
                key={productId}
              >
                <td className="leading-none font-bold text-timberwolf-700 w-5/12 py-4">
                  {productName}
                </td>
                <td className="leading-none w-20 py-4 w-1/5">
                  <ItemCounter
                    className="leading-none flex w-1/2 mx-3"
                    defaultValue={productQuantity}
                    onChange={(value) =>
                      handleProductQuantityChange(productId, value)
                    }
                  />
                </td>
                <td className="leading-none w-3/12 text-right mx-3 font-bold text-orange-500 py-4">
                  {productCurrency}
                  {FormatPrice(productPrice)}
                </td>
                <td className="leading-none w-6 text-gray-400 text-4xl p-4 items-end">
                  <Button
                    icon={{
                      name: "DeleteIcon",
                      styleClass:
                        "w-3 h-3 m-0 text-gray-400 stroke-width-4 focus:text-blue-400 hover:text-blue-400",
                    }}
                    buttonStyle="silent"
                    onClick={() => handleItemDeleteBtnClick(productId)}
                    title="Delete Item"
                  ></Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="grid grid-cols-3 p-6 bg-wildsand-300">
        <div className="text-timberwolf-900 font-bold text-4xl col-span-1">
          <p className="text-2xl">
            <span>{productCurrency}</span>
            <span>{itemsTotalPrice}</span>
          </p>
        </div>
        <div className="leading-none text-gray-400 text-4xl col-span-1 flex justify-end">
          <Button
            title="Clear Cart"
            buttonStyle="silent"
            onClick={handleCartClearBtnClick}
          >
            Clear
          </Button>
        </div>
        <div className="leading-none text-gray-400 col-span-1">
          <Button title="Checkout Cart" onClick={handleCartCheckoutBtnClick}>
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
