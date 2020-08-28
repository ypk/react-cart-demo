import {
  LocalStorage,
  GetVATAmount,
  GetVATRateObject
} from "./index";

const CartItemsCount = (items) => {
  const itemsCount = items.reduce(
    (total, product) => Number.parseInt(total + product.quantity),
    0
  );
  return itemsCount;
};

const ItemsTotalPrice = (items) => {
  items.forEach((item) => {
    item.totalPrice = Number.parseFloat(item.productPrice * item.quantity);
  });
  return items;
};

const CartTotalPrice = (items, VAT = false) => {
  const cartTotal = items.reduce((total, product) => {
    if (VAT) {
      const vatRateObject = GetVATRateObject();
      const vatAmount = GetVATAmount(
        product.productPrice,
        product.quantity,
        vatRateObject.vatRate
      );
      return Number.parseFloat((total + (product.productPrice + vatAmount)) * product.quantity);
    } else {
      return Number.parseFloat(total + product.productPrice * product.quantity);
    }
  }, 0);
  return cartTotal.toFixed(2);
};

const StoreCartItems = (items) => {
  const STORAGE_KEY = "MMT-STORE-CART";
  LocalStorage.SetItem(items, STORAGE_KEY);
};

const GetCartItemsCountAndTotal = (items) => {
  StoreCartItems(items);
  let itemsCount = CartItemsCount(items);
  let itemsTotalPrice = ItemsTotalPrice(items);
  let totalPrice = CartTotalPrice(items);
  let totalPriceVAT = CartTotalPrice(items, true);

  return {
    itemsCount,
    itemsTotalPrice,
    totalPrice,
    totalPriceVAT,
  };
};

export default GetCartItemsCountAndTotal;
