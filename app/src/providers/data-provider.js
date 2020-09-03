import React, { useState } from "react";
import { DataContext } from "../contexts";

import MockData from "../data";

const DataProvider = ({ children }) => {
  const [data] = useState(MockData);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
