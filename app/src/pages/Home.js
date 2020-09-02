import React, { useContext } from "react";
import Core from "../components/core";
import DataContext from "../contexts";

const Home = () => {
  const { data } = useContext(DataContext);
  return <Core {...data} />;
};

export default Home;
