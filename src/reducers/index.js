import { combineReducers } from 'redux';
import auth from './auth';
import messageReduc from './message';
import speciality from './speciality';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth,
    messageReduc,
    speciality,
    form: formReducer
});