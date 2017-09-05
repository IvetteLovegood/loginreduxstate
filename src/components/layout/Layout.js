import React, { Component } from 'react';
import Login from '../auth/Login';
import store from './../../store';
import Navbar from './Navbar';
import InventarioList from '../stock/list';
import Particles from 'react-particles-js';
import { logIn } from '../../actionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logobs.png';
import classie from 'classie';
import { Route } from 'react-router-dom';
import stockPublic from '../stock/stockPublic';

var params = {particles: {number: {value: 120},line_linked: {color: '#000',shadow: { enable: false}}}};
var jsonresponse;

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = { response: [], data: "" }

        store.subscribe(() => {

            this.setState({ response: store.getState() });
            jsonresponse = this.state.response.response;
            console.log(jsonresponse);
            this.setState({ data: jsonresponse })

        });
    }

    renderLogin() {
        if (this.state.data.resultCode !== "0") {
            return (
                <div id="fondo">
                <div className="layer">
                    <Navbar/>
                    <Route exact path="/" component={Login}/>
                    <Route path={"/list"} component={stockPublic}/> 
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    <Route exact path="/" component={InventarioList}/>
                </div>);
        }
    }

    render() {
        return (
            <div>{this.renderLogin()}</div>
        );
    }
}

export default Layout;