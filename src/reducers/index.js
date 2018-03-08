import { combineReducers } from 'redux';
import auth from './auth';
import messageReduc from './message';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth,
    messageReduc,
    form: formReducer
});