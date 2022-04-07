import { orderTypes } from "../types/order.types";

const { GET_ORDER, REMOVE_ORDER } = orderTypes;

const initialState = {
    orders: [],
    selected: null
}


const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return {
                ...state,
                orders: action.orders
            }
        case REMOVE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.orderId)
            }
        default:
            return state
    }
}
export default orderReducer;