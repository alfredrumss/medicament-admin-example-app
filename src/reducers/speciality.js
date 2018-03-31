import { 
    FETCH_SPECIALITIES 
} from '../constants';


export default (state = {}, action) => {

    switch (action.type) {
        case FETCH_SPECIALITIES:
            return {
                ...state,
                specialities: action.payload  
            }
        default:
            return state;
    }
}