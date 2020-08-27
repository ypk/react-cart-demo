import { LocalStorage } from "./index";

const CartItemsCount = (items) => {
  const itemsCount = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return itemsCount;
};

const CartTotalPrice = (items, VAT = null) => {
  const cartTotal = items.reduce((total, product) => {
    if (VAT) {
      return ((total + product.price * product.quantity) * VAT) / 100;
    } else {
      return total + product.price * product.quantity;
    }
  }, 0);
  return cartTotal.toFixed(2);
};

const GetCartItemsCountAndTotal = (items) => {
    LocalStorage.SetItem(items);
    let itemsCount = CartItemsCount(items);
    let totalPrice = CartTotalPrice(items);
    return {
        itemsCount,
        totalPrice
    };
}

export default GetCartItemsCountAndTotal;
