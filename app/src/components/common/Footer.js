import React from "react";
import { CurrencySelector } from "../common";
import SocialLinks from "./SocialLinks";
import {
  GetYear
} from "../../helpers";

const Footer = () => {

  const currentYear = GetYear();
  return (
    <footer className="container mx-auto pt-4 md:py-4 border-t border-gray-400">
      <div className="container flex px-3 py-4">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <p className="pb-4">
                This is a mock store built for the sole purpose of testing the
                development skills of{" "}
                <a
                  className="hover:underline font-bold hover:text-blue-400"
                  href="http://www.github.com/ypk"
                >
                  @ypk
                </a>
                .
              </p>
              <p>&copy;&nbsp;{currentYear}. Everything is open-sourced.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full my-4 md:my-0 md:w-1/2 items-center md:justify-end">
            <div className="flex px-3 py-2 md:px-0 md:py-0 md:mr-8">
              <SocialLinks />
            </div>
            <CurrencySelector />

          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
