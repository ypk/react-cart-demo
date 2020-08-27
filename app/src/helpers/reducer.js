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
                items: [...state.items]
            } 
        case "removeItem": 
            const removedItem = [...state.items.filter(item => item.id !== data)];
            return {
                ...state,
                items: [...removedItem]
            }
        case "incrementItem": 
            let itemToIncrement = [state.items.findIndex(item => item.id === data)]
            state.items[itemToIncrement].quantity++;
            return {
                ...state,
                items: [...state.items]
            } 
        case "decrementItem": 
            const itemToDecrement = [state.items.findIndex(item => item.id === data)]
            state.items[itemToDecrement].quantity--;
            return {
                ...state,
                items: [...state.items]
            } 
        case "checkOut": 
            return {
                items: [],
                checkout: true
            } 
        case "emptyCart": 
            return {
                items: []
            };
        default:
            return state; 
    }
}

export default reducer;