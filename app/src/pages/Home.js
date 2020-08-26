import React, { useContext } from "react";
import Loading from "../components/common/Loading";
import Layout from "../components/Layout";
import ProductsContext from "../contexts/Products";

const Home = () => {
  const { products } = useContext(ProductsContext);

  const featured = products.filter((product) => product.isFeatured === true);
  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2">
        <div className="container py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
            Featured products
          </h2>
          <div className="flex flex-wrap mt-2 mx-2">
            {featured.map((product) => {
              const { id, productName, productPrice, imgUrl } = product;
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 my-2" key={id}>
                  <div className="shadow-md hover:shadow-lg bg-white">
                    <a href={`/item/${id}`} 
                        style={{background: "#f3f5ea"}}>
                      <img
                        className="h-64 w-full object-cover"
                        src={imgUrl}
                        alt={productName}
                      />
                      <div className="mx-2">
                        <div className="mx-2 pt-3 flex items-center justify-between">
                          <p className="font-bold text-sm">{productName}</p>
                        </div>
                        <p className="p-2 text-gray-900 text-sm">{productPrice}</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
