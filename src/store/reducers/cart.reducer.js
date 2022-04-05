import { cartTypes } from "../types/cart.types";

const { ADD_ITEM, REMOVE_ITEM, COMFIRM_CART } = cartTypes;

const initialState = {
    items: [],
    total: 0
}

const sumTotal = (list) => list.map(item => item.quantity * item.price).reduce((acc, curr) => acc + curr, 0);

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const indexItem = state.items.findIndex(item => item.id === action.item.id);
            if(indexItem === -1) {
                const item = {...action.item, quantity: 1};
                const updatedCart = [...state.items, item];
                return {
                    ...state,
                    items: updatedCart,
                    total: sumTotal(updatedCart)
                }
            }

            const items = [...state.items].map(item => {
                if(item.id === action.item.id) item.quantity ++;
                return item;
            });
            return {
                ...state,
                items,
                total: sumTotal(items)
            }    
        case REMOVE_ITEM:
            const cleanCart = [...state.items].filter(item => item.id !== action.id);
            return {
                ...state,
                items: cleanCart,
                total: sumTotal(cleanCart)
            }
        case COMFIRM_CART:
            return state;
        default:
            return state;
    }
}

export default cartReducer;