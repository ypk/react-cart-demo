import { LocalStorage, GetVATAmount, GetPreferences } from "./index";

const STORAGE_KEY = "MMT-STORE-CART";

const CartItemsCount = (items) => {
  const itemsCount = items.reduce(
    (total, product) => Number.parseInt(total + product.quantity),
    0
  );
  return itemsCount;
};

const CartTotalPriceWithVAT = (price) => {
  const { userPreferences } = GetPreferences();
  const { VATData } = userPreferences;
  const { vatRate } = VATData;
  const vatAmount = GetVATAmount(price, vatRate);
  return Number.parseFloat(price + vatAmount);
};

const CartTotalPrice = (items) => {
  const cartTotal = items.reduce((total, product) => {
    return total + product.productPrice * product.quantity;
  }, 0);
  return Number.parseFloat(cartTotal.toFixed(2));
};

const SetCartItems = (items) => {
  LocalStorage.SetItem(items, STORAGE_KEY);
};

const GetCartItems = () => {
  const storePreferences = LocalStorage.GetItem(STORAGE_KEY);
  return storePreferences;
};

const FindProductInCart = (cart, product) => {
  return cart.find((item) => item.id === product.id);
};

const CanProductBeBought = (cart, product) => {
  const inCart = FindProductInCart(cart, product);

  if (inCart) {
    const metQuantityLimit = cart.find((item) => {
      return item.id === product.id && item.quantity === item.quantityAvailable;
    });
    if (metQuantityLimit) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};

const GetCartItemsCountAndTotal = (items) => {
  SetCartItems(items);
  let itemsCount = CartItemsCount(items);
  let totalPrice = CartTotalPrice(items);
  let totalPriceVAT = CartTotalPriceWithVAT(totalPrice);

  return {
    itemsCount,
    totalPrice,
    totalPriceVAT,
  };
};

export {
  CanProductBeBought,
  FindProductInCart,
  GetCartItems,
  SetCartItems,
  GetCartItemsCountAndTotal,
};
