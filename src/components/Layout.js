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

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <div>LOGIN:</div>
                <label >{this.state.data.resultCode}</label>
                <Login/>
            </div>
        );
    }
}

export default Layout;