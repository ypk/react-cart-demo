import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ProductContext, CurrencyContext } from "../contexts";
import { Breadcrumb } from "../components/common";
import { NormalizeSlug } from "../helpers";

const Products = () => {
  const DEFAULT_CURRENCY = "GBP";
  const currPage = "Products";
  const { products } = useContext(ProductContext);
  const { currency } = useContext(CurrencyContext);
  const currencyObject = currency.reduce(function (prev, curr) {
    return curr.code === DEFAULT_CURRENCY ? curr : prev;
  }, null);

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="container py-8 px-6 mx-auto">

          <main className="my-8">
            <nav className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <Breadcrumb currPage={currPage} />
              <div className="flex items-center mb-8">
                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>

                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </a>
              </div>
            </nav>
            <div className="grid gap-8 md:gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {products.map((product) => {
                const { id, productName, productPrice, imgUrl } = product;
                return (
                  <div
                    className="w-full max-w-sm mx-auto bg-white rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-lg"
                    key={id}
                  >
                    <Link to={`/product/${NormalizeSlug(id)}`}>
                      <div
                        className="flex items-end justify-end h-56 w-full bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${imgUrl})` }}
                      />
                      <div className="product-info justify-center items-stretch">
                        <div className="px-5 py-3 h-20">
                          <h3 className="text-gray-700 uppercase">{productName}</h3>
                        </div>
                        <div className="px-5 py-3">
                        <span className="text-gray-500 mt-2">
                          {currencyObject.symbol}
                          {productPrice}
                        </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
