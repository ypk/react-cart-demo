import { LocalStorage } from "./index";

const STORAGE_KEY = "MMT-STORE-PREFERENCES";

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
  const storePreferences = LocalStorage.GetItem(STORAGE_KEY);
  return storePreferences;
};

const SetPreferences = (item) => {
  LocalStorage.SetItem(item, STORAGE_KEY);
};

export { GetCountryFlagByCode, GetPreferences, SetPreferences };
