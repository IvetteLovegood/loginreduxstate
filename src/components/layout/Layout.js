import React, { Component } from 'react';
import Login from '../auth/Login';
import store from './../../store';
import NavBar from './Navbar';


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
                <div>
                    <NavBar/>
                    <Login />
                </div>
            );
        } else {
            return (
                <div>dwdwdqwdqwd</div>);
        }
    }

    render() {
        return (
            <div>{this.renderLogin()}</div>
        );
    }
}

export default Layout;