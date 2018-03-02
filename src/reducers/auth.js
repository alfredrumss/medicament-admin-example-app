import { TEST } from '../constants';

export default (state= {}, action) => {
    switch (action.type) {
        case TEST:
         return {
             ...state,
             lol: action.payload.message
         }
        default:
            return state;
    }
}