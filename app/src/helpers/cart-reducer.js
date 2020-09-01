import { GetCartItemsCountAndTotal, FindProductInCart } from "./index";

const CartReducer = (state, trigger) => {
  const { action, data, quantity } = trigger;
  const {items} = state;
  const foundItem  = FindProductInCart(items, data);
  
  switch (action) {
    case "addItem":
      if (!foundItem) {
        items.push({
          ...data,
          quantity,
        });
      } else {
        const itemToUpdate = items.findIndex((item) => item.id === data.id);
        const {quantity: quantityInCart} = items[itemToUpdate];
        const updatedQuantity = Number.parseInt(quantity) + Number.parseInt(quantityInCart);
        items[itemToUpdate].quantity = updatedQuantity;
      }
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "removeItem":
      const removedItem = [...items.filter((item) => item.id !== data)];
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(removedItem) },
        items: [...removedItem],
      };
    case "incrementItem":
      const itemToIncrement = items.findIndex((item) => item.id === data);
      items[itemToIncrement].quantity++;
      return {
        ...state,
        cartSummary: { ...GetCartItemsCountAndTotal(items) },
        items: [...items],
      };
    case "decrementItem":
      const itemToDecrement = items.findIndex((item) => item.id === data);
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
