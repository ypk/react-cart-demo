import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { Breadcrumb, Button, ItemCounter, Icons } from "../components/common";
import { ProductContext, CurrencyContext, CartContext } from "../contexts";
import { NormalizeSlug } from "../helpers";
import { useParams } from "react-router-dom";

const Product = () => {
  let params = useParams();
  const DEFAULT_CURRENCY = "GBP";

  const [quantitySelected, setQuantitySelected] = useState(1);
  const { products } = useContext(ProductContext);
  const { currency } = useContext(CurrencyContext);
  const { addProduct } = useContext(CartContext);

  const product = products.reduce(function (prev, curr) {
    return NormalizeSlug(curr.id) === params.id ? curr : prev;
  }, null);
  const currencyObject = currency.reduce(function (prev, curr) {
    return curr.code === DEFAULT_CURRENCY ? curr : prev;
  }, null);
  const { productName, productPrice, quantityAvailable, productDescription, imgUrl } = product;

  const prevPage = {
    link: "/products",
    title: "Products",
  };
  const currPage = productName;

  const { FlagIcons } = Icons;
  const {
    UKFlagIcon,
    USAFlagIcon,
    EuroFlagIcon,
    CanadaFlagIcon,
    AustraliaFlagIcon,
    JapanFlagIcon,
    IndiaFlagIcon,
    ChinaFlagIcon
  } = FlagIcons;
  
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
                    {currencyObject.symbol}
                    {productPrice}
                  </span>

                  <div className="my-12">{productDescription}</div>

                  <div className="my-12">
                    {quantityAvailable > 0 ? (
                        <>
                        <div className="my-12 flex flex-row md:flex-col">
                          <ItemCounter labelClass="my-8 mr-5 md:my-0 md:mr-0" maxAllowedLimit={quantityAvailable} onChange={(value) => {
                            setQuantitySelected(value)
                          }}/>
                        </div>
                        <div className="flex flex-col items-center">
                          <Button
                            icon="CartIcon"
                            onClick={(e) => {
                              e.preventDefault();
                              addProduct(product, quantitySelected);
                            }}
                            className="w-full justify-center"
                          >
                            Add to cart
                          </Button>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-500">Sorry, Item out of stock</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="my-12 flex flex-row">
              <div className="flex flex-col">
                <UKFlagIcon  className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                <USAFlagIcon  className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                <EuroFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400"  />
                <CanadaFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400"  />
                <AustraliaFlagIcon  className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                <JapanFlagIcon  className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                <IndiaFlagIcon  className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400"  />
                <ChinaFlagIcon  className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
              </div>
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
