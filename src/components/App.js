import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
//import { history } from '../store';
import Header from './Header';


class App extends Component {

    render() {
        return (
            <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </BrowserRouter>
            
            </div>
        )
    }
}

export default connect(state => state)(App);