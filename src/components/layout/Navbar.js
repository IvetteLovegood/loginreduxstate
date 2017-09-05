import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logobs from './../../images/logobs.png';
import classie from 'classie';

class NavBar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand ">
                            <img src={Logobs}/>
                            </Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right cl-effect-21">
                            <li>
                                <Link to="/list" className="btn-navbar">
                                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                     &nbsp;&nbsp;Productos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
        );
    }
}

export default NavBar;