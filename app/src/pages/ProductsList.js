import React, { useContext } from "react";
import Layout from "../components/Layout";
import { ProductContext, CurrencyAndVATContext } from "../contexts";
import { Breadcrumb } from "../components/common";
import Product from "../components/Product";

const ProductsList = () => {
  const currPage = "Products";
  const { products } = useContext(ProductContext);

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="container py-8 px-6 mx-auto">

          <main className="my-8">
            <nav className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <Breadcrumb currPage={currPage} />
            </nav>
            <div className="grid gap-8 md:gap-y-16 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {products.map((product) => {
                const { id } = product;
                return (
                  <div
                    className="w-full max-w-sm mx-auto bg-white h-64 md:h-full rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-lg"
                    key={id}
                  >
                    <Product product={product} />
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

export default ProductsList;
