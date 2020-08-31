import React, { useState, useContext } from "react";
import { Icons } from "./common";
import { GetCountryFlagByCode } from "../helpers";
import { PreferencesContext } from "../contexts";

const CurrencySelector = () => {
  const preferencesContext = useContext(PreferencesContext);
  const {
    setPreferences,
    storePreferences,
    userPreferences,
  } = preferencesContext;

  const { currencyAndVATContext: StoreCurrencyAndVATData } = storePreferences;
  const { selectedCurrency: UserPreferredCurrency } = userPreferences;

  const { FlagIcons, ChevronIcons } = Icons;

  const { ChevronDownIcon } = ChevronIcons;

  const [currencyPreferences, setCurrencyPreferences] = useState({
    preferences: {
      selectedCurrency: UserPreferredCurrency,
      currency: StoreCurrencyAndVATData.currency,
      SelectedCurrencyFlag:
        FlagIcons[GetCountryFlagByCode(UserPreferredCurrency)],
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
    setCurrencyPreferences(() => {
      return {
        preferences: {
          selectedCurrency: code,
          currency: StoreCurrencyAndVATData.currency,
          SelectedCurrencyFlag: FlagIcons[GetCountryFlagByCode(code)],
        },
        currencySelectorOpen: false,
      };
    });

    setPreferences({
      selectedCurrency: code,
    });
  };

  const { preferences } = currencyPreferences;
  const {
    selectedCurrency: selectedCurrencyName,
    currency,
    SelectedCurrencyFlag,
  } = preferences;

  return (
    currency && (
      <div className="flex px-3 py-2 md:px-0 w-full md:w-1/4">
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
                  const CountryIcon = FlagIcons[GetCountryFlagByCode(code)];
                  return (
                    CountryIcon && (
                      <li
                        className="flex self-center"
                        key={id}
                        onClick={() => handleCountryChangeBtnClick(code)}
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
    )
  );
};

export default CurrencySelector;
