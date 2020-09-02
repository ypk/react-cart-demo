import React, { useContext } from "react";
import Core from "../components/core";
import DataContext from "../contexts";

const Home = () => {
  const dataContext = useContext(DataContext);
  return <Core data={dataContext} />;
};

export default Home;
