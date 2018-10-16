const personReducer = (state = {
    name: "Noureddine",
    product: 'Foot',
    price :20

}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: [...state.name, action.payload]
            };
            break;

        case "SET_PRODUCT":
            state = {
                ...state,
                product: [...state.product, action.payload]
            };
            break;

        case "SET_PRICE":
            state = {
                ...state,
                price: [...state.price, action.payload]
            };
            break;
    }
    return state;
};


export default personReducer;