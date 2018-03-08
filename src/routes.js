import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Signup from './components/Signup';
import Inputpreview from './components/inputPreview';

import { default as RequireAuth} from './components/Auth/require_auth';
import {default as NotRequireAuth} from './components/Auth/no_require_auth';
import { AUTHENTICATED } from './constants';


export default () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={RequireAuth(Home)}/>
                <Route path="/login" component={NotRequireAuth(Login)} />
                <Route path="/signup" component={NotRequireAuth(Signup)} />
            </Switch>
        </BrowserRouter>
    )
    
}