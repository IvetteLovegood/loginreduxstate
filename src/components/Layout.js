import React, { Component } from 'react';
import Login from './Login';
import store from '../store';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: ""
        }

        store.subscribe(() => {
            this.setState({
                user: store.getState().user
            });
        });
    }

    render() {

        const isLoggedIn = this.state.user;

        return (
            <div id="hidenLogin">
                LOGIN: <b>{isLoggedIn ? 'OK' : 'NO'}</b>
                <label>{this.state.user}</label>
                    <Login/>
            </div>
        );
    }
}

export default Layout;