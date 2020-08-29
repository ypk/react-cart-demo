import { LocalStorage } from "./index";

const GetCurrencyObject = () => {
  const STORAGE_KEY = "MMT-STORE-CURRENCY";
  const currencyObject = LocalStorage.GetItems(STORAGE_KEY);
  return currencyObject;
};

const GetVATRateObject = () => {
  const STORAGE_KEY = "MMT-STORE-VAT";
  const VATObject = LocalStorage.GetItems(STORAGE_KEY);
  return VATObject;
};

const GetVATAmount = (price, rate) => {
  return (price * rate) / 100;
};

const FormatPrice = (price) => {
  return Number.parseFloat(price).toFixed(2).toString();
};

const GetCountryFlagByCode = (code) => {
  const flagCode = {
    GBP: "UKFlagIcon",
    USD: "USAFlagIcon",
    EUR: "EuroFlagIcon",
    CAD: "CanadaFlagIcon",
    AUD: "AustraliaFlagIcon",
    JPY: "JapanFlagIcon",
    INR: "IndiaFlagIcon",
    CHY: "ChinaFlagIcon",
  };
  return flagCode[code] || null;
};

export { GetCountryFlagByCode, GetCurrencyObject, GetVATRateObject, GetVATAmount, FormatPrice };
