import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../contexts";
import { NormalizeSlug } from "../helpers";

const FeaturedProducts = ({ products }) => {
  const { currency } = useContext(CurrencyContext);
  const DEFAULT_CURRENCY = "GBP";

  const currencyObject = currency.reduce(function (prev, curr) {
    return curr.code === DEFAULT_CURRENCY ? curr : prev;
  }, null);

  const featured = products.filter((product) => product.isFeatured === true);

  return featured.map((product) => {
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
  });
};

export default FeaturedProducts;
