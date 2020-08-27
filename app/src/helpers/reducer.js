const reducer = (state, action) => {
    switch(action) {
        case "addItem": 
            return {
                ...state
            } 
        case "removeItem": 
            return {
                ...state
            }
        case "incrementItem": 
            return {
                ...state
            } 
        case "decrementItem": 
            return {
                ...state
            }
        case "checkOut": 
            return {
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