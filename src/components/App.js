import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Inputpreview from './inputPreview';
import { default as RequireAuth} from './Auth/require_auth';
import {default as NotRequireAuth} from './Auth/no_require_auth';

import { setMessage } from '../actions/message';

class App extends Component {
    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }

    render() {
        const { message } = this.props.messageReduc;

        return (
            <div>
                <Inputpreview 
                    value={message}
                    onChange={this._onChange}
                     />

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={RequireAuth(Home)}/>
                        <Route path="/login" component={NotRequireAuth(Login)} />
                        <Route path="/signup" component={NotRequireAuth(Signup)} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(state => state)(App);