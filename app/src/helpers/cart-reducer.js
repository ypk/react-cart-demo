import { GetCartItemsCountAndTotal } from "./index";

const CartReducer = (state, trigger) => {
  const { action, data, quantity } = trigger;
  switch (action) {
    case "addItem":
      if (!state.items.find((item) => item.id === data)) {
        state.items.push({
          ...data,
          quantity,
        });
      }
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(state.items) },
        items: [...state.items],
      };
    case "removeItem":
      const removedItem = [...state.items.filter((item) => item.id !== data)];
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(removedItem) },
        items: [...removedItem],
      };
    case "incrementItem":
      const itemToIncrement = state.items.findIndex((item) => item.id === data);
      state.items[itemToIncrement].quantity++;
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(state.items) },
        items: [...state.items],
      };
    case "decrementItem":
      const itemToDecrement = state.items.findIndex((item) => item.id === data);
      state.items[itemToDecrement].quantity--;
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(state.items) },
        items: [...state.items],
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
