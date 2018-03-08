import { 
    TEST,
    AUTHENTICATED,
    AUTHENTICATION_ERROR,
    UNAUTHENTICATED
 } from '../constants';

export default (state= {}, action) => {
    switch (action.type) {
        case TEST:
         return {
             ...state,
             lol: action.payload.message
         }
        case AUTHENTICATED:
            return { ...state, authenticated: true };
        case UNAUTHENTICATED:
            return { ...state, authenticated: false };
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}