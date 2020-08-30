import React, { useState, useContext } from "react";
import { Icons } from "../common";
import {
  GetYear,
  GetCountryFlagByCode,
  SetPreferences,
  GetCurrencyData,
} from "../../helpers";
import { PreferencesContext } from "../../contexts";

const Footer = () => {
  const preferencesContext = useContext(PreferencesContext);
  const { userPreferences } = preferencesContext;
  const { currencyAndVATContext } = userPreferences;
  const currentYear = GetYear();
  const { FlagIcons, SocialIcons, ChevronIcons } = Icons;

  const {
    WhatsAppIcon,
    TwitterIcon,
    InstagramIcon,
    FacebookIcon,
  } = SocialIcons;
  const { ChevronDownIcon } = ChevronIcons;

  const [currencyPreferences, setCurrencyPreferences] = useState({
    preferences: {
      selectedCurrency: userPreferences.selectedCurrency,
      currency: userPreferences.currencyAndVATContext.currency,
      SelectedCurrencyFlag:
        FlagIcons[GetCountryFlagByCode(userPreferences.selectedCurrency)],
    },
    currencySelectorOpen: false,
  });

  const handleCurrencySelectorDropdownBtnClick = (e) => {
    e.preventDefault();
    setCurrencyPreferences(() => {
      return {
        ...currencyPreferences,
        currencySelectorOpen: !currencyPreferences.currencySelectorOpen,
      };
    });
  };

  const handleCountryChangeBtnClick = (code) => {
    const CurrencyAndVATData = GetCurrencyData({
      selectedCurrency: code,
      currencyAndVATContext: currencyAndVATContext,
    });

    SetPreferences({
      selectedCurrency: code,
      ...CurrencyAndVATData 
    });

    setCurrencyPreferences(() => {
      return {
        ...currencyPreferences,
        currencySelectorOpen: !currencyPreferences.currencySelectorOpen,
        preferences: {
          ...currencyPreferences.preferences,
          selectedCurrency: code,
          SelectedCurrencyFlag: FlagIcons[GetCountryFlagByCode(code)],
        },
      };
    });
  };

  const { preferences } = currencyPreferences;
  const {
    selectedCurrency: selectedCurrencyName,
    currency,
    SelectedCurrencyFlag,
  } = preferences;

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
              <ol className="list-reset flex flex-wrap md:flex-no-wrap">
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1"
                    href="https://www.facebook.com/"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-10 h-12 md:w-8 md:h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1"
                    href="https://www.twitter.com/"
                    title="Twitter"
                  >
                    <TwitterIcon className="w-10 h-12 md:w-8 md:h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1"
                    href="https://www.instagram.com/"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-10 h-12 md:w-8 md:h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1"
                    href="https://www.whatsapp.com/"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-10 h-12 md:w-8 md:h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
                  </a>
                </li>
              </ol>
            </div>
            {currency && (
              <div className="flex px-3 py-2 md:px-0 w-full">
                <div className="relative flex w-full lg:justify-end m-1">
                  <div
                    className={`${
                      currencyPreferences.currencySelectorOpen ? "" : "hidden"
                    } origin-top-right absolute right-0 bottom-0 rounded-md shadow-lg`}
                  >
                    <div className="rounded-md bg-white shadow-xs px-2 py-1">
                      <ol
                        className="group list-reset justify-center flex flex-wrap md:flex-no-wrap"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {currency.map((c) => {
                          const { id, code } = c;
                          const CountryIcon =
                            FlagIcons[GetCountryFlagByCode(code)];
                          return (
                            CountryIcon && (
                              <li
                                key={id}
                                onClick={() =>
                                  handleCountryChangeBtnClick(code)
                                }
                              >
                                <CountryIcon className="w-14 h-16 px-2 cursor-pointer rounded focus:bg-blue-400 hover:bg-blue-400" />
                              </li>
                            )
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                  <div className="w-full md:w-32">
                    <span className="rounded-md shadow-sm">
                      <button
                        type="button"
                        className="group inline-flex justify-center w-full rounded-md border border-gray-300 p-4 md:p-2 bg-white text-sm leading-5 font-medium focus:text-blue-400 hover:text-blue-400 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue transition ease-in-out"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={handleCurrencySelectorDropdownBtnClick}
                      >
                        <SelectedCurrencyFlag className="w-8 h-6 group-focus:opacity-50 group-hover:opacity-50" />
                        <span className="mx-1 text-md leading-6 font-bold">
                          {selectedCurrencyName}
                        </span>

                        <ChevronDownIcon className="w-4 h-6 ml-2 group-focus:text-blue-400 group-hover:text-blue-400" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
