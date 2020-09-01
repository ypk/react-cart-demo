import { GetCartItemsCountAndTotal } from "./index";

const CartReducer = (state, trigger) => {
  const { action, data, quantity } = trigger;
  const {items} = state;
  const {id} = data;
  switch (action) {
    case "addItem":
      if (!(items.some(item => item.id === id))) {
        items.push({
          ...data,
          quantity,
        });
      }
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "removeItem":
      const removedItem = [...items.filter((item) => item.id !== id)];
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(removedItem) },
        items: [...removedItem],
      };
    case "incrementItem":
      const itemToIncrement = items.findIndex((item) => item.id === id);
      items[itemToIncrement].quantity++;
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "decrementItem":
      const itemToDecrement = items.findIndex((item) => item.id === id);
      items[itemToDecrement].quantity--;
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "checkOut":
      return {
        items: [],
        checkout: true,
        cartSummary: { ...GetCartItemsCountAndTotal([]) },
      };
    case "emptyCart":
      return {
        items: [],
        cartSummary: { ...GetCartItemsCountAndTotal([]) },
      };
    default:
      return state;
  }
};

export default CartReducer;
