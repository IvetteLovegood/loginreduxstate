import React, { Component } from 'react';
import { logIn } from '../../actionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logobs.png';
import classie from 'classie';
import { Route } from 'react-router-dom';
import stockPublic from '../stock/stockPublic';

var email, password, user, formlogin = "";
const deviceId = " ";
class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = { user: "", email: "", password: "" }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, name) {
        event.preventDefault();
        this.setState({
            [name]: event.target.value
        });
    };

    prepareData() {
        email = this.state.email;
        password = this.state.password;
        user = { email, password, deviceId };
    }


    render() {
        return (
            <div className="login-page">                        
			        <div className="widget-shadow">
			            <div className="login-body">
                            <h3>Iniciar Sesión</h3>
			                <input type="text" name="user" placeholder="Correo Electrónico" value={this.state.username} onChange={ (event)=> this.handleChange(event, 'email')} required/>
			                <input type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={ (event)=> this.handleChange(event, 'password')} required/>
			                <div className="login-button">
			                	{this.prepareData()}
			                    <button onClick={()=> this.props.logIn(user)}>Entrar</button>
			                </div>
			            </div>
			        </div>
			    </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logIn(user) {
            dispatch(logIn(user));
        }
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);