import React, { Component } from 'react';
import Login from './Login';
import store from '../store';

var jsonresponse, hidden;
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
            this.setState({ data: jsonresponse })
        });

    }

    renderLogin() {
        if (this.state.data.resultCode !== "0") {
            return (<Login/>);
        } else {

            return (<div></div>);
        }
    }

    render() {

        return (
            <div>
                {this.renderLogin()}
            </div>
        );
    }
}

export default Layout;