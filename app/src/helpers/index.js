import NormalizeSlug from "./normalize-slug";
import LocalStorage from "./storage-ops";
import CartReducer from "./cart-reducer";
import { GenerateCarouselIndexes, GetCurrentSlide } from "./carousel-ops";
import GetCartItemsCountAndTotal from "./cart-ops";
import {
  GetCurrencyObject,
  GetVATRateObject,
  GetVATAmount,
  FormatPrice,
} from "./currency-ops";

export {
  LocalStorage,
  NormalizeSlug,
  GetCartItemsCountAndTotal,
  CartReducer,
  GenerateCarouselIndexes,
  GetCurrentSlide,
  GetCurrencyObject,
  GetVATRateObject,
  GetVATAmount,
  FormatPrice,
};
