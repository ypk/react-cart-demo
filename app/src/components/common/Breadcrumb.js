import React from "react";
import { Icons } from "../common";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { ChevronIcon } = Icons;
  const { prevPage, currPage } = props;
  return (
    <nav className="mb-8 w-full">
      <ol className="list-reset flex flex-wrap md:flex-no-wrap">
        <li className="mb-4 md:mb-0">
          <Link className="hover:text-blue-400" to="/">
            <h2 className="flex uppercase tracking-wide font-cinzel font-bold text-black text-sm md:text-xl">
              Home
            </h2>
          </Link>
          
        </li>
        <li className="mb-4 md:mb-0"><ChevronIcon className="h-5 w-4 m-2 my-0 md:my-1" /></li>
        {prevPage && (
          <>
            <li className="mb-4 md:mb-0">
              <Link className="hover:text-blue-400" to={prevPage.link}>
                <h2 className="flex uppercase font-cinzel tracking-wide font-bold text-black text-sm md:text-xl">
                  {prevPage.title}
                </h2>
              </Link>
            </li>
            <li className="mb-4 md:mb-0">
              <ChevronIcon className="h-5 w-4 m-2 my-0 md:my-1" />
            </li>
          </>
        )}
        <li className="mb-4 md:mb-0">
          <h2 className="flex uppercase font-cinzel tracking-wide font-bold text-black text-sm md:text-xl">
            {currPage}
          </h2>
        </li>
      </ol>
    </nav>
  );
};
export default Breadcrumb;
