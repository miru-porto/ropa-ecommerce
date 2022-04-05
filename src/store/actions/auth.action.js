import { URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from '../../utils/database';
import { authTypes } from '../types/auth.types';

const { SIGNUP, SIGNIN } = authTypes;

export const signup = (email, password) => {
    return async dispatch => {
        try {
        const response = await fetch(URL_AUTH_SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, returnSecureToken: true })
        });

        const result = await response.json();

        console.warn(result);

        dispatch({
            type: SIGNUP,
            token: result.idToken,
            userId: result.localId
        });
    } catch (error) {
        console.warn(error);
    }
    }
}

export const signin = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
    });

        const result = await response.json();

        console.warn(result);

        dispatch({
            type: SIGNIN,
            token: result.idToken,
            userId: result.localId
        });
    }
}