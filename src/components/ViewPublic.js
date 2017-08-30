import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import store from '../store';
import '../index.css';

var jsonresponse;

class ViewPublic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
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


//TODO terminar condicion.

    render() {
    const isLoggedIn = this.state.user;

       return (
            <div>
                <Link to="/list">
                    {isLoggedIn ? '' : 'Productos'}
                </Link>
            </div>

       );
    }
}

export default ViewPublic;