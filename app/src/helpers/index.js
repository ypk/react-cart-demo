import NormalizeSlug from "./normalize-slug";
import LocalStorage from "./storage-ops";
import CartReducer from "./cart-reducer";
import PreferencesReducer from "./preferences-reducer";
import { GenerateCarouselIndexes, GetCurrentSlide } from "./carousel-ops";
import {
  CanProductBeBought,
  FindProductInCart,
  GetCartItemsCountAndTotal,
  GetCartItems,
  SetCartItems,
} from "./cart-ops";
import GetYear from "./date-ops";
import {
  GetCurrencyData,
  GetVATAmount,
  FormatPrice,
  GetCountryByCode,
} from "./currency-ops";
import {
  GetCountryFlagByCode,
  GetPreferences,
  SetPreferences,
} from "./preferences-ops";
import { CanUseDOM, FilterToastById, GenerateUEID } from "./toast-ops";
import Logger from "./logger-ops";

export {
  LocalStorage,
  NormalizeSlug,
  GetCartItems,
  SetCartItems,
  FindProductInCart,
  CanProductBeBought,
  GetCartItemsCountAndTotal,
  GetYear,
  CartReducer,
  PreferencesReducer,
  GenerateCarouselIndexes,
  GetCountryFlagByCode,
  GetCurrentSlide,
  GetCurrencyData,
  GetPreferences,
  SetPreferences,
  GetCountryByCode,
  GetVATAmount,
  FormatPrice,
  CanUseDOM,
  FilterToastById,
  Logger,
  GenerateUEID
};
