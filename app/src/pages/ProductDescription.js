import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { Breadcrumb, Button, ItemCounter } from "../components/common";
import { ProductContext, PreferencesContext, CartContext } from "../contexts";
import { CanProductBeBought, NormalizeSlug } from "../helpers";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const params = useParams();

  const prevPage = {
    link: "/products",
    title: "Products",
  };

  const [quantitySelected, setQuantitySelected] = useState(1);

  const preferencesContext = useContext(PreferencesContext);
  const { userPreferences } = preferencesContext;
  const { currencyData } = userPreferences;
  const { products } = useContext(ProductContext);

  const { addProduct, items: cartItems } = useContext(CartContext);

  const product = products.reduce(function (prev, curr) {
    return NormalizeSlug(curr.id) === params.id ? curr : prev;
  }, null);

  const {
    productName,
    productPrice,
    quantityAvailable,
    productDescription,
    imgUrl,
  } = product;

  const currPage = productName;

  const canBuyProduct = CanProductBeBought(cartItems, product);

  console.log(canBuyProduct)
  const handleAddToCartButtonClick = () => {
    addProduct(product, quantitySelected);
  };

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="container py-8 px-6 mx-auto">
          <Breadcrumb currPage={currPage} prevPage={prevPage} />
          <main className="my-8">
            <div className="container mx-auto px-6">
              <div className="md:flex md:items-center">
                <div className="w-full mr-6 md:w-1/2">
                  <img
                    className="w-4/2 md:w-3/4 max-h-1/2 rounded-md shadow-md object-cover mx-auto"
                    src={`/${imgUrl}`}
                    alt={productName}
                  />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                  <h3 className="text-black mt-3 font-playfair text-2xl uppercase text-lg">
                    {productName}
                  </h3>
                  <span className="text-black-500 font-poppins text-3xl my-3">
                    {currencyData.symbol}
                    {productPrice}
                  </span>

                  <div className="my-12 md:my-6">{productDescription}</div>

                  <div className="my-12 md:my-6">
                    {quantityAvailable > 0 ? (
                      <>
                        <p className="md:mb-6">
                          Quantity available: {quantityAvailable}
                        </p>
                        <div className="mb-6 flex flex-col">
                          <ItemCounter
                            labelClass="my-6 mr-0 md:my-0"
                            maxAllowedLimit={quantityAvailable}
                            disabled={canBuyProduct === null}
                            onChange={(value) => {
                              setQuantitySelected(value);
                            }}
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          {canBuyProduct ? (
                            <Button
                              icon="CartIcon"
                              onClick={handleAddToCartButtonClick}
                              className="w-full justify-center"
                              disabled={quantitySelected > quantityAvailable}
                            >
                              Add to cart
                            </Button>
                          ) : (
                            <p className="text">Item already in cart</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-500">Sorry, Item out of stock</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDescription;
