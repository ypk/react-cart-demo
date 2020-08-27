import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Breadcrumb, Button, ItemCounter } from "../components/common";
import { CartContext } from "../contexts";

const Cart = () => {
  const currPage = "Cart";
  const { items } = useContext(CartContext);

  const [quantitySelected, setQuantitySelected] = useState(1);

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
                            className="grid grid-flow-row grid-cols-5  pb-4 border-gray-500 border-b-1"
                          >
                            <div className="col-span-auto">
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
                              <Link to={`/product/${id}`}>{productName}</Link>
                              <div className="product-quantity-pricing">
                                <div className="product-quantity">
                                  <div className="quantity-wrap  qty-show">
                                    <ItemCounter
                                      labelClass="text-sm"
                                      onChange={(value) => {
                                        setQuantitySelected(value);
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-1">
                              <span className="amount">
                                <span className="currency-symbol">GBP</span>
                                {productPrice}
                              </span>
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
                <div className="w-full md:w-1/2 flex flex-col mx-auto">
                  <p>Your cart is currently empty.</p>
                  <Link
                    className="font-bold hover:underline hover:text-blue-400"
                    to="/"
                  >
                    Return to home
                  </Link>
                </div>
              )}
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
