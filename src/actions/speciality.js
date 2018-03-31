import axios from 'axios';
import {
    FETCH_SPECIALITIES,
    URL_SERVICE
} from '../constants';

export const fetchSpecialitiesAction = () => {
    return dispatch => {
        try {
            const token = localStorage.getItem('token');

            if(token){
                
                const req = axios.get(`${URL_SERVICE}api/v1/speciality`, { headers: { authorization: `Token ${token}` }})
                        .then(response => {
                            dispatch({
                                type: FETCH_SPECIALITIES,
                                payload: response.data,
                            })
                        })

            }
       
        }
        catch(error){
         //   
        }
    }
}