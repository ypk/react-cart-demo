import { GetCartItemsCountAndTotal } from "./index";

const CartReducer = (state, trigger) => {
    const {action, data, quantity} = trigger;
    switch(action) {
        case "addItem":
            if(!state.items.find(item => item.id === data)) {
                state.items.push({
                    ...data,
                    quantity
                });
            }
            return {
                ...state,
                ...GetCartItemsCountAndTotal(state.items),
                items: [...state.items]
            }
        case "removeItem": 
            const removedItem = [...state.items.filter(item => item.id !== data)];
            return {
                ...state,
                ...GetCartItemsCountAndTotal(removedItem),
                items: [...removedItem]
            }
        case "incrementItem": 
            let itemToIncrement = [state.items.findIndex(item => item.id === data)]
            state.items[itemToIncrement].quantity++;
            return {
                ...state,                
                ...GetCartItemsCountAndTotal(state.items),
                items: [...state.items]
            } 
        case "decrementItem": 
            const itemToDecrement = [state.items.findIndex(item => item.id === data)]
            state.items[itemToDecrement].quantity--;
            return {
                ...state,
                ...GetCartItemsCountAndTotal(state.items),
                items: [...state.items]
            } 
        case "checkOut": 
            return {
                items: [],
                checkout: true,
                ...GetCartItemsCountAndTotal([])
                
            } 
        case "emptyCart": 
            return {
                items: [],
                ...GetCartItemsCountAndTotal([])
            };
        default:
            return state; 
    }
}

export default CartReducer;