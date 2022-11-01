// const INITIAL_STATE = {
//     user_id: '',
//     name: '',
//     email: '',
//     password: '',

// }

const userReducer = (state = null, action) => {
    switch (action.type) {
        case "ADDCART_PRODUCT":
            return {...state, cart: action.payload};
        case "ADDMORE_PRODUCT":
            return action.payload;
        case "SET_USER":
            return action.payload;
        case "UPDATE_USER":
            return action.payload;
        case "LOGOUT":
            return null;
        case "SET_SELLER_USER":
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
