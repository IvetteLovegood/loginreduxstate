import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Login';
import store from '../store';
import '../index.css';
import listProduct from './detailPublic';


var jsonresponse;

class NavBar extends Component {

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
            this.setState({ data: jsonresponse })
        });
    }

    renderPublicList() {

        if (this.state.data.resultCode !== "0") {
            return (
                <span>
                <Route path={"/list"} component={listProduct}/>
                <Link to="/">Login</Link>
                <Link to="/list">Catálogo</Link></span>
            );
        } else {


        }
    }


    render() {
        return (
            <div>{this.renderPublicList()} </div>
        );
    }
}

export default NavBar;