import { CartItemsCount, CartTotalPrice } from "../helpers/cart-items";

const reducer = (state, trigger) => {
    const {action, data} = trigger;
    switch(action) {
        case "addItem":
            if(!state.items.find(item => item.id === data)) {
                state.items.push({
                    ...data,
                    quantity: 1
                });
            }
            return {
                ...state,
                itemsCount: CartItemsCount(state.items),
                cartTotal: CartTotalPrice(state.items),
                items: [...state.items]
            }
        case "removeItem": 
            const removedItem = [...state.items.filter(item => item.id !== data)];
            return {
                ...state,
                itemsCount: CartItemsCount(removedItem),
                cartTotal: CartTotalPrice(removedItem),
                items: [...removedItem]
            }
        case "incrementItem": 
            let itemToIncrement = [state.items.findIndex(item => item.id === data)]
            state.items[itemToIncrement].quantity++;
            return {
                ...state,
                itemsCount: CartItemsCount(itemToIncrement),
                cartTotal: CartTotalPrice(itemToIncrement),
                items: [...state.items]
            } 
        case "decrementItem": 
            const itemToDecrement = [state.items.findIndex(item => item.id === data)]
            state.items[itemToDecrement].quantity--;
            return {
                ...state,
                itemsCount: CartItemsCount(itemToDecrement),
                cartTotal: CartTotalPrice(itemToDecrement),
                items: [...state.items]
            } 
        case "checkOut": 
            return {
                items: [],
                checkout: true,
                itemsCount: CartItemsCount([]),
                cartTotal: CartTotalPrice([]),
                
            } 
        case "emptyCart": 
            return {
                items: [],
                itemsCount: CartItemsCount([]),
                cartTotal: CartTotalPrice([]),
            };
        default:
            return state; 
    }
}

export default reducer;