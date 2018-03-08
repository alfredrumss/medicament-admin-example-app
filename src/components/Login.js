import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction } from '../actions/auth';
import { connect } from 'react-redux';

class Login extends Component {

    submit = (values) => {
        this.props.signInAction(values, this.props.history);
    }

    errorMessage(){
        if(this.props.errorAuth){
            return (
                <div className="info-red">
                    <span>Error >> </span>
                    <span>{ this.props.errorAuth }</span>
                </div>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="loginmodal-container">
                <h1>Login to Your Account</h1><br />
                <form onSubmit={ handleSubmit(this.submit) } >
                    <Field 
                        name="email"
                        component="input"
                        type="text"
                        placeholder="Email" >
                    </Field>

                    <Field 
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password..." >
                    </Field>
                    <button type="submit" className="btn btn-primary" > Send </button>
                </form>
                {this.errorMessage()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errorAuth: state.auth.error
})

const reduxFormSignin = reduxForm({
    form: 'signin'
})(Login);

export default connect(mapStateToProps, { signInAction })(reduxFormSignin);

