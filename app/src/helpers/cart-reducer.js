import { GetCartItemsCountAndTotal, FindProductInCart } from "./index";
import { Logger } from "../helpers";

const CartReducer = (state, trigger) => {
  const { action, data, quantity, updateInCart } = trigger;
  const { items } = state;
  const foundItem = FindProductInCart(items, data);

  switch (action) {
    case "addItem":
      if (!foundItem) {
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
    case "updateItem":
      const itemToUpdate = items.findIndex((item) => item.id === data.id);
      if (updateInCart) {
        items[itemToUpdate].quantity = quantity;
        Logger.info("Product added!");
      } else {
        const { quantity: quantityInCart } = items[itemToUpdate];
        items[itemToUpdate].quantity = quantityInCart + quantity;
        Logger.info("Product updated!");
      }
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "removeItem":
      const removedItem = items.filter((item) => item.id !== data);
      Logger.info("Product removed!");
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(removedItem) },
        items: [...removedItem],
      };
    case "incrementItem":
      const itemToIncrement = items.findIndex((item) => item.id === data);
      items[itemToIncrement].quantity++;
      Logger.info("Product quantity incremented!");
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "decrementItem":
      const itemToDecrement = items.findIndex((item) => item.id === data);
      items[itemToDecrement].quantity--;
      Logger.info("Product quantity decremented!");
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "checkOut":
      Logger.info("Checkout complete!");
      return {
        items: [],
        checkout: true,
        cartSummary: { ...GetCartItemsCountAndTotal([]) },
      };
    case "emptyCart":
      Logger.info("Cart emptied!");
      return {
        items: [],
        cartSummary: { ...GetCartItemsCountAndTotal([]) },
      };
    default:
      return state;
  }
};

export default CartReducer;
