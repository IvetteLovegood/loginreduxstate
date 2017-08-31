import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Layout from './layout/Layout';
import '../css/style.css'
import '../css/bootstrap.css';
import '../css/custom.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <div><Layout/></div>
          </BrowserRouter>
        );
    }
}

export default App;