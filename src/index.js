import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/App';
import AppRoutes from './routes';
import { 
    AUTHENTICATED
} from './constants';

if (localStorage.getItem('user')){
    store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render((
    <Provider store={store}>
        <AppRoutes />
    </Provider>
), document.getElementById('root'));