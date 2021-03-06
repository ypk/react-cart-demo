import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { NormalizeSlug } from "../helpers";
import { PreferencesContext } from "../contexts";

const Product = ({ product }) => {
  const { id, productName, productPrice, imgUrl } = product;
  const preferencesContext = useContext(PreferencesContext);
  const { userPreferences } = preferencesContext;
  const { currencyData } = userPreferences;

  return (
    <Link to={`/product/${NormalizeSlug(id)}`}>
      <div
        className="flex items-end justify-end h-32 md:h-56 w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="product-info justify-center items-stretch">
        <div className="px-5 py-3 h-20 overflow-hidden">
          <h3 className="text-gray-700 uppercase text-sm md:text-4 ">{productName}</h3>
        </div>
        <div className="px-5 py-3">
          <span className="text-gray-500 mt-2">
            {currencyData.symbol}
            {productPrice}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
