import React, { useContext } from "react";
import Loading from "../components/common/Loading";
import Layout from "../components/Layout";
import { ProductContext, CurrencyContext } from "../contexts";
import { NormalizeSlug } from "../helpers";
import { useParams } from "react-router-dom";

const Product = () => {
  let params = useParams();
  const DEFAULT_CURRENCY = "GBP";
  const { products } = useContext(ProductContext);
  const { currency } = useContext(CurrencyContext);
  const product = products.reduce(function(prev, curr) { return ( NormalizeSlug(curr.id) === params.id) ? curr : prev; }, null);
  const currencyObject = currency.reduce(function(prev, curr) { return (curr.code === DEFAULT_CURRENCY) ? curr : prev; }, null);
  const {productName, productPrice, productDescription, imgUrl } = product;
  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="container py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
            Description
          </h2>
          <main className="my-8">
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full mr-6 md:w-1/2">
                    <img className="w-auto max-h-1/2 rounded-md shadow-md object-cover mx-auto" src={`/${imgUrl}`} alt={productName} />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-black mt-3 font-playfair text-2xl uppercase text-lg">{productName}</h3>
                    <span className="text-black-500 font-poppins text-3xl my-3">{currencyObject.symbol}{productPrice}</span>
                    <div className="my-12">
                        {productDescription}
                    </div>
                    <div className="my-12">
                        <label className="text-xl  text-sm" htmlFor="count">Quantity:</label>
                        <div className="flex items-center my-4">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span className="text-gray-700 text-lg mx-2">20</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="my-12">
                        <button className="px-5 py-3 flex justify-between items-center bg-black text-white text-sm font-bold rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><svg className="h-5 w-5 mr-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>&nbsp;Add to cart</button>
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

export default Product;
