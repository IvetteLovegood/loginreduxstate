import React, { Component } from 'react';
import { logIn } from '../../actionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logobs.png';

var email, password, user = "";
const deviceId = " ";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { user: "", email: "", password: "" }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, name) {
        event.preventDefault();
        this.setState({ [name]: event.target.value });
    };

    prepareData() {
        email = this.state.email;
        password = this.state.password;
        user = { email, password, deviceId };
    }

    render() {
        return (
            <div id="fondo">
			    <div className="login-page">
			        <div className="widget-shadow">
			            <div className="login-top">
			                <div className="login-image">
                                <img src={logo} alt="BrainyStoreLogo"/>
			                </div>
			            </div>
			            <div className="login-body">
			                <input type="text" name="user" placeholder="Usuario" value={this.state.username} onChange={ (event)=> this.handleChange(event, 'email')} required/>
			                <input type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={ (event)=> this.handleChange(event, 'password')} required/>
			                <div className="login-button">
			                	{this.prepareData()}
			                    <button onClick={()=> this.props.logIn(user)}>Iniciar Sesión</button>
			                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);