import { TEST } from '../constants';

export const testMessage = (message) => {
    return dispatch => ({
        type: TEST,
        payload: {
            message
        }
    })
}