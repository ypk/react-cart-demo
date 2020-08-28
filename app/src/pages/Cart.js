import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import { Breadcrumb, Button, ItemCounter } from "../components/common";
import { CurrencyContext, CartContext } from "../contexts";
import { FormatPrice } from "../helpers";

const Cart = () => {
  const currPage = "Cart";
  const DEFAULT_CURRENCY = "GBP";
  const history = useHistory();

  const {
    incrementProductCount,
    decrementProductCount,
    items,
    removeProduct,
    checkOut,
    clearCart,
  } = useContext(CartContext);
  const { currency } = useContext(CurrencyContext);
  const currencyObject = currency.reduce(function (prev, curr) {
    return curr.code === DEFAULT_CURRENCY ? curr : prev;
  }, null);
  const [quantitySelected, setQuantitySelected] = useState();

  const handleCartItemDecrement = (item) => {
    decrementProductCount(item);
  };
  const handleCartItemIncrement = (item) => {
    incrementProductCount(item);
  };

  const handleDeleteItemClick = (item) => {
    removeProduct(item);
  };

  const handleEmptyCartBtnClick = () => {
    alert(`This will clear the cart now`);
    clearCart();
  };

  const handleCheckoutCartBtnClick = () => {
    let purchased = "";
    items.reduce((curr, prev) => {
      purchased += `> ${prev.productName} - Qty: ${prev.quantity}\n`;
    }, 0);
    alert(`Checkout Initiated.\n\nProducts purchased:\n\n${purchased}`);
    checkOut();
  };

  const handleContinueShoppingBtnClick = () => {
    history.push("/products");
  };

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="container py-8 px-6 mx-auto">
          <Breadcrumb currPage={currPage} />
          <main className="my-8">
            <div className="md:flex md:items-center">
              {items.length > 0 ? (
                <>
                  <div className="w-full">
                    {items &&
                      items.map((item) => {
                        const {
                          id,
                          productName,
                          productPrice,
                          quantity,
                          imgUrl,
                        } = item;
                        return (
                          <div
                            key={id}
                            className="grid grid-flow-row grid-cols-5 p-4 my-4 border-gray-500 border-b border-gray-100"
                          >
                            <div className="col-span-2 md:col-auto">
                              <Link to={"/product"}>
                                <img
                                  width="100"
                                  height="100"
                                  src={imgUrl}
                                  alt={productName}
                                />
                              </Link>
                            </div>
                            <div className="col-span-3">
                              <div className="flex flex-col justify-between h-full flex-wrap">
                                <Link
                                  className="font-bold text-xl"
                                  to={`/product/${id}`}
                                >
                                  {productName}
                                </Link>
                                <div className="flex flex-col md:flex-row">
                                  <ItemCounter
                                    labelClass="text-md md:my-5 md:mr-3"
                                    defaultValue={quantity}
                                    inCart={true}
                                    onIncrement={() =>
                                      handleCartItemIncrement(item)
                                    }
                                    onDecrement={() =>
                                      handleCartItemDecrement(item)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-span-5 md:col-auto">
                              <div className="flex flex-row flex-row-reverse py-6 md:py-0 md:flex-col justify-between h-full items-end flex-wrap">
                                <Button
                                  icon="DeleteIcon"
                                  buttonStyle="silent"
                                  title="Delete Item"
                                  onClick={() => handleDeleteItemClick(item)}
                                  className="py-0 md:py-3 flex flex-row w-26 flex-end justify-end"
                                >
                                  <span className="ml-2 md:hidden text-xl font-normal">
                                    Delete
                                  </span>
                                </Button>
                                <div className="flex text-xl md:mb-4 pb-3 md:pb-0 flex-row">
                                  <span className="mr-1">
                                    {currencyObject.symbol}
                                  </span>
                                  <span>{FormatPrice(productPrice)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    World
                  </div>
                </>
              ) : (
                <div className="w-full md:w-1/2 my-6 md:my-32 flex flex-col mx-auto">
                  <p className="my-12 text-gray-600">
                    Your cart is currently empty. Here are some options for you:
                  </p>
                  <div>
                    <Link
                      className="font-bold hover:underline hover:text-blue-400 mr-4 "
                      to="/"
                    >
                      Go Home
                    </Link>
                    <Link
                      className="font-bold hover:underline hover:text-blue-400 ml-4"
                      to="/products"
                    >
                      Add Products
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {items.length > 0 && (
              <>
                <div className="w-full md:items-center md:flex">
                  <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-col">
                      <Button onClick={handleContinueShoppingBtnClick}>
                        Continue Shopping
                      </Button>
                    </div>
                    <div className="flex flex-col">
                      <Button
                        onClick={handleEmptyCartBtnClick}
                        buttonStyle="custom"
                        className="justify-end bg-red-500 hover:bg-red-900 focus:bg-red-900"
                      >
                        Empty Cart
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col items-center flex-grow flex-shrink">
                    <div div className="flex flex-col">
                      <Button
                        onClick={handleCheckoutCartBtnClick}
                        className="justify-center"
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
