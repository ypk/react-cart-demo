import { GetItemsTotalPrice } from "../helpers";

const CartReducer = (state, trigger) => {
  const { action, data, quantity } = trigger;
  const { items } = state;
  switch (action) {
    case "updateItem":
      items[data].productQuantity = quantity;
      return {
        ...state,
        items: [...items],
        itemsTotalPrice: GetItemsTotalPrice(items)
      };
    case "removeItem":
      items[data].productQuantity = 0;
      return {
        ...state,
        items: [...items],
        itemsTotalPrice: GetItemsTotalPrice(items)
      };
    case "clearCart":
      const clearedCart = items.map((item) => {
        item.productQuantity = 0;
        return item;
      });
      return {
        ...state,
        items: [...clearedCart],
        itemsTotalPrice: GetItemsTotalPrice(items)
      };
    default:
      return state;
  }
};

export default CartReducer;
