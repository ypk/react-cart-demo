import React, { useContext } from "react";
import Layout from "../components/Layout";
import FeaturedProducts from "../components/FeaturedProducts";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="mx-6 my-6 md:my-0 md:mb-20 relative shadow">
          <Carousel />
        </div>
        <div className="container py-8 px-6 mx-auto">
          <FeaturedProducts products={products} />
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
