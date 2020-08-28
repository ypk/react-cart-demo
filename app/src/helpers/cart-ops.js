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
const CartTotalPriceWithVAT = (price) => {
  const {vatRate} = GetVATRateObject(); 
  const vatAmount = GetVATAmount(
    price,
    vatRate
  );
  return Number.parseFloat(price + vatAmount);
};

const CartTotalPrice = (items) => {
  const cartTotal = items.reduce((total, product) => {
    return total + (product.productPrice * product.quantity);
  }, 0);
  return Number.parseFloat(cartTotal.toFixed(2));
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
  let totalPriceVAT = CartTotalPriceWithVAT(totalPrice);

  return {
    itemsCount,
    itemsTotalPrice,
    totalPrice,
    totalPriceVAT,
  };
};

export default GetCartItemsCountAndTotal;
