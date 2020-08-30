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

const GetStorePreferences = () => {
  const STORAGE_KEY = "MMT-STORE-CURRENCY";
  const storePreferences = LocalStorage.GetItem(STORAGE_KEY);
  return storePreferences;
};

const SetStorePreferences = (item) => {
  const STORAGE_KEY = "MMT-STORE-CURRENCY";
  LocalStorage.SetItem(item, STORAGE_KEY);
};

export { GetCountryFlagByCode, GetStorePreferences, SetStorePreferences };
