import React, { Component } from 'react';
import { logIn } from '../../actionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logobs.png';
import classie from 'classie';
import { Route } from 'react-router-dom';
import stockPublic from '../stock/stockPublic';
import FormLogin from './formLogin';
import Footer from '../layout/Footer';



var email, password, user, formlogin = "";
const deviceId = " ";

class Login extends Component {

    render() {
        return (
            <div className="formlogin">
            	<FormLogin/>
            	<Footer/>
            </div>
        );
    }
}

export default Login;