const reducer = (state, trigger) => {
    const {type, data} = trigger;
    switch(type) {
        case "addItem": 
            if(!state.items.find(item => item.id === data) {
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
            const filteredItems = [...state.items.filter(item => item.id !== data)];
            return {
                ...state,
                items: [...filteredItems]
            }
        case "incrementItem": 
            const item = [state.items.findIndex(item => item.id === data)]
            state.items[item].quantity++;
            return {
                ...state,
                items: [...state.items]
            } 
        case "decrementItem": 
            const item = [state.items.findIndex(item => item.id === data)]
            state.items[item].quantity--;
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