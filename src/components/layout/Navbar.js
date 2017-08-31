import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import listProduct from '../stock/detailPublic';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';


class NavBar extends Component {

    render() {
        return (
            <div>
                <Route path={ "/list"} component={listProduct}/>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">Login</Link>
                        </div>
                        <ul className="nav navbar-nav">
                           <li>
                                <Link to="/list">Catálogo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;