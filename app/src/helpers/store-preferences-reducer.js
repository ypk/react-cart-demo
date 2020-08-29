import { LocalStorage } from "../helpers";

const StorePreferences = (items) => {
  const STORAGE_KEY = "MMT-STORE-CURRENCY";
  LocalStorage.SetItem(items, STORAGE_KEY);
  console.log(items)
  return items;
};

const StorePreferencesReducer = (state, trigger) => {
  const { action, data } = trigger;
  switch (action) {
    case "setCountryPreference":
      return {
        ...state,
        ...StorePreferences({
          ...state,
          userPreference: data,
        }),
      };
    default:
      return state;
  }
};

export default StorePreferencesReducer;
