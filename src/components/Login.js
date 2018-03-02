import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="loginmodal-container">
                <h1>Login to Your Account</h1><br />
                <form>
                <input type="text" name="user" placeholder="Username" />
                <input type="password" name="pass" placeholder="Password" />
                <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
                </form>
                
                <div className="login-help">
                <a href="#">Register</a> - <a href="#">Forgot Password</a>
                </div>
            </div>
        );
    }
}

export default Login;

