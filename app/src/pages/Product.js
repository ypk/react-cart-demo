import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Breadcrumb, Button, Icons } from "../components/common";
import { ProductContext, CurrencyContext, CartContext } from "../contexts";
import { NormalizeSlug } from "../helpers";
import { useParams } from "react-router-dom";

const Product = () => {
  let params = useParams();
  const DEFAULT_CURRENCY = "GBP";

  const { products } = useContext(ProductContext);
  const { currency } = useContext(CurrencyContext);
  const { addProduct, itemsCount } = useContext(CartContext);

  const product = products.reduce(function (prev, curr) {
    return NormalizeSlug(curr.id) === params.id ? curr : prev;
  }, null);
  const currencyObject = currency.reduce(function (prev, curr) {
    return curr.code === DEFAULT_CURRENCY ? curr : prev;
  }, null);
  const { productName, productPrice, productDescription, imgUrl } = product;

  const prevPage = {
    link: "/products",
    title: "Products",
  };
  const {ChevronIcon} = Icons;
  const currPage = productName;

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
                    className="w-1/2 max-h-1/2 rounded-md shadow-md object-cover mx-auto"
                    src={`/${imgUrl}`}
                    alt={productName}
                  />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                  <h3 className="text-black mt-3 font-playfair text-2xl uppercase text-lg">
                    {productName}
                  </h3>
                  <span className="text-black-500 font-poppins text-3xl my-3">
                    {currencyObject.symbol}
                    {productPrice}
                  </span>
                  <div className="my-12">{productDescription}</div>
                  <div className="my-12">
                    <label className="text-xl  text-sm" htmlFor="count">
                      Quantity:
                    </label>
                    <div className="flex items-center my-4">
                      <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                      <span className="text-gray-700 text-lg mx-2">20</span>
                      <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {product.quantityAvailable > 0 ? (
                    itemsCount < product.quantityAvailable ? (
                      <Button
                        icon="CartIcon"
                        onClick={(e) => {
                          e.preventDefault();
                          addProduct(product);
                        }}
                      >Add to cart</Button>
                    ) : (
                      <Button className="pointer-events-none" silent={true}>Sorry, Item out of stock</Button>
                    )
                  ) : (
                    <Button className="pointer-events-none" silent={true}>Sorry, Item out of stock</Button>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
