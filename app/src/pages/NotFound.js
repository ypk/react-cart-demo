import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="bg-mmt-500 py-8">
        <div className="container py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-playfair text-gray-800 text-6xl mb-8">
            404: Not Found
          </h2>
          <div  className="mt-8 mb-8 text-xl">
          <p className="mb-2">
            The page you are looking for does not exist!
        </p>
          <p>
            Don't worry! you can click the link below to go back to home page
          </p>

          </div>
          <a className="font-bold hover:underline hover:text-blue-400" href="/">Return to home</a>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
