import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import store from '../store';
import '../index.css';

class ViewPublic extends Component {

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
            <div>
                <Link to="/list">
                    {isLoggedIn ? '' : 'Productos'}
                </Link>
            </div>

       );
    }
}

export default ViewPublic;