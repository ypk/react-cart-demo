import React from "react";
import { Icons } from "../common";

const Footer = () => {
  const { FlagIcons, SocialIcons } = Icons;
  const {
    UKFlagIcon,
    USAFlagIcon,
    EuroFlagIcon,
    CanadaFlagIcon,
    AustraliaFlagIcon,
    JapanFlagIcon,
    IndiaFlagIcon,
    ChinaFlagIcon,
  } = FlagIcons;

  const {
    WhatsAppIcon,
    TwitterIcon,
    InstagramIcon,
    FacebookIcon,
  } = SocialIcons;
  const date = new Date();
  const currentYear = date.getFullYear();
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
          <div className="flex flex-col w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <ul className="list-reset items-center">
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.facebook.com/"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.twitter.com/"
                    title="Twitter"
                  >
                    <TwitterIcon className="w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.instagram.com/"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.whatsapp.com/"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-3 md:px-0">
              <div className="relative flex lg:justify-end m-4">
              <div className="hidden origin-top-right absolute right-0 mt-2 rounded-md shadow-lg">
                <div className="rounded-md bg-white shadow-xs">
                  <div
                    className="py-1/2 flex flex-row"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <UKFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                    <USAFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                    <EuroFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                    <CanadaFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                    <AustraliaFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                    <JapanFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                    <IndiaFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                    <ChinaFlagIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
                  </div>
                </div>
              </div>
              <div>
                <span className="rounded-md shadow-sm">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Currency Add Chevron Bottom Here
                  </button>
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
