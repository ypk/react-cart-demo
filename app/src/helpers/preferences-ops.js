import { LocalStorage } from "./index";

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

const GetPreferences = () => {
  const STORAGE_KEY = "MMT-STORE-CURRENCY";
  const storePreferences = LocalStorage.GetItem(STORAGE_KEY);
  return storePreferences;
};

const SetPreferences = (item) => {
  const STORAGE_KEY = "MMT-STORE-CURRENCY";
  LocalStorage.SetItem(item, STORAGE_KEY);
};

export { GetCountryFlagByCode, GetPreferences, SetPreferences };
