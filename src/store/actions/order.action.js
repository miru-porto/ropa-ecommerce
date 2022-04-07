import { URL_API } from '../../utils/database'
import { orderTypes } from '../types/order.types'

const { GET_ORDER, REMOVE_ORDER } = orderTypes;

const orderByUser = (data, user) => {
    const orders = Object.keys(data).map(key => ({
        ...data[key],
        id: key
    }));

    return orders.filter(order => order.user === user);
}

export const getOrders = (user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/order.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            console.warn(result);

            const orders = orderByUser(result, user);

            dispatch({
                type: GET_ORDER,
                orders
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}


export const removeOrder = (orderId) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/order/${orderId}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            console.warn(result);

            dispatch({
                type: REMOVE_ORDER,
                orderId
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}