const CartReducer = (state, trigger) => {
  const { action, data, quantity } = trigger;
  const { items } = state;
  switch (action) {
    case "updateItem":
      items[data].productQuantity = quantity;
      return {
        items: [...items],
      };
    case "removeItem":
      items[data].productQuantity = 0;
      return {
        items: [...items],
      };
    case "checkOut":
      return {
        items: [],
      };
    case "clearCart":
      const clearedCart = items.map((item) => {
        item.productQuantity = 0;
        return item;
      });
      return {
        items: [...clearedCart]
      };
    default:
      return state;
  }
};

export default CartReducer;
