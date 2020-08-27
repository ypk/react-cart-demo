import React from "react";
import { Icons } from "../common";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { ChevronIcon } = Icons;
  const { prevPage, currPage } = props;
  return (
    <h2 className="flex uppercase tracking-wide font-bold text-black text-xl mb-8">
      <Link className="font-cinzel  hover:text-blue-400" to="/">
        Home
      </Link>
      <ChevronIcon />
      {prevPage && (
        <>
          <Link className="font-cinzel  hover:text-blue-400" to={prevPage.link}>
            {prevPage.title}
          </Link>
          <ChevronIcon />
        </>
      )}
      <span className="font-cinzel">{currPage}</span>
    </h2>
  );
};
export default Breadcrumb;
