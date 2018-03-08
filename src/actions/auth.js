import axios from 'axios';
import { 
    TEST, 
    AUTHENTICATED, 
    UNAUTHENTICATED, 
    AUTHENTICATION_ERROR,
    URL_SERVICE
} from '../constants';

export const testMessage = (message) => {
    return dispatch => ({
        type: TEST,
        payload: {
            message
        }
    })
}


export function signInAction ({ email, password }, history) {

    return async (dispatch) => {
        try {
            const req = await axios.post(`${URL_SERVICE}api-token-auth/`, { email, password } );

            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('user', JSON.stringify(req.data.user));
            localStorage.setItem('token', req.data.token);
            history.push('/');
        }
        catch (error){
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            });
        }
    }
}


export function signOutAction () {

   return (dispatch) => {
        if (localStorage.getItem('token')){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
        dispatch({ type: UNAUTHENTICATED });
   }
}
