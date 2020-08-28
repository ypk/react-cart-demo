import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { ProductContext, CurrencyContext } from "../contexts";
import { NormalizeSlug } from "../helpers";

const Home = () => {
  const DEFAULT_CURRENCY = "GBP";
  const { products } = useContext(ProductContext);
  const { currency } = useContext(CurrencyContext);
  const featured = products.filter((product) => product.isFeatured === true);
  const currencyObject = currency.reduce(function (prev, curr) {
    return curr.code === DEFAULT_CURRENCY ? curr : prev;
  }, null);

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="mx-6 my-6 md:my-0 md:mb-20 relative shadow">
          <Carousel />
        </div>
        <div className="container py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
            Featured products
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {featured.map((product) => {
              const { id, productName, productPrice, imgUrl } = product;
              return (
                <div
                  className="w-full max-w-sm mx-auto bg-white rounded-md shadow-md  cursor-pointer overflow-hidden hover:shadow-lg"
                  key={id}
                >
                  <Link to={`/product/${NormalizeSlug(id)}`}>
                    <div
                      className="flex items-end justify-end h-56 w-full bg-cover bg-no-repeat bg-center"
                      style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">{productName}</h3>
                      <span className="text-gray-500 mt-2">
                        {currencyObject.symbol}
                        {productPrice}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-8">
            <Link
              className="font-bold hover:underline hover:text-blue-400"
              to="/products"
            >
              View all products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
