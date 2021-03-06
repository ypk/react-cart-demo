import React, { useContext } from "react";
import Product from "../components/Product";
import { PreferencesContext } from "../contexts";

const FeaturedProducts = ({ products }) => {
  const preferencesContext = useContext(PreferencesContext);
  const { userPreferences } = preferencesContext;
  const { currencyData } = userPreferences;

  const featured = products.filter((product) => product.isFeatured === true);

  return (
    <>    
      <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
        Featured products
      </h2>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {
        featured.map((product) => {
          const { id } = product;
          return (
            <div
              className="w-full max-w-sm mx-auto bg-white h-64 md:h-full rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-lg"
              key={id}
            >
              <Product product={product} currency={currencyData} />
            </div>
          );
        })
      }
      </div>
    </>
  )
};

export default FeaturedProducts;
