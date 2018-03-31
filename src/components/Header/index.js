import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../actions/auth';

const LoggedOutView = props => {

    if (!props.currentUser){

        return (
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav"> 
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li className="active"><Link to="/signup"> Sign up</Link></li>
                <li> <Link to="/login"> Sign in</Link> </li>
                </ul>
            </div>
        )
    }
    return null;
}

const LoggedInView = props => {

    /*const handleClick = ev => {
        props.onClickOut()
    };*/

    if (props.currentUser){
        return (
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav"> 
                <li className="active"><a href="#">Specialities</a></li>
                <li><a href="#">Diagnosis</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><a onClick={ (ev) => { props.onClickOut() } } >Sign out</a></li>
                </ul>
            </div>
        );
    }
    return null;
}

class Header extends React.Component {

    loggedOut = () => {
        this.props.signOutAction()
    }


    render () {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">MedicamentSelf</a>
                        
                    </div>
                    <LoggedOutView currentUser={ this.props.is_authenticated } />
                    <LoggedInView currentUser={ this.props.is_authenticated } onClickOut={ this.loggedOut } />
                    </div>
                </nav>

                <div className="jumbotron">
                    <h1>Navbar example</h1>
                    <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                    <p>
                    <a className="btn btn-lg btn-success" href="../../components/#navbar" role="button">View navbar docs »</a>
                    </p>
                </div>

                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    is_authenticated: state.auth.authenticated
})

export default connect(mapStateToProps, { signOutAction })(Header);