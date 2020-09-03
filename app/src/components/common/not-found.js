import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "./index";

const NotFound = () => {
  return (
    <Layout>
      <p>This isn't the page you're looking for. Click the link below to </p>
      <Link
        className="inline-block font-bold no-underline hover:text-black py-2 pr-4 text-black hover:text-blue-400 focus:text-blue-400"
        to="/"
        title="Go Home"
      >
        Go Home
      </Link>
    </Layout>
  );
};

export default NotFound;
