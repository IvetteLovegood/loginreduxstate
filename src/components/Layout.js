import React, { Component } from 'react';
import Login from './Login';
import store from '../store';
var jsonresponse;
class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            response: [],
            data: ""
        }

        store.subscribe(() => {
            this.setState({
                response: store.getState()
            });

            jsonresponse = this.state.response.response;
            console.log(jsonresponse)
            this.setState({ data: jsonresponse })
        });

    }

    renderLogin() {
        if (this.state.data.resultCode !== "0") {
            return (<Login/>);
        } else {

        }
    }

    render() {

        return (
            <div>
                <div>LOGIN:</div>
                <label >{this.state.data.resultCode}</label>
                {this.renderLogin()}
            </div>
        );
    }
}

export default Layout;