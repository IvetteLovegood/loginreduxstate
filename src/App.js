import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import Layout from './components/Layout';
import ViewPublic from './components/ViewPublic';
import listProduct from './components/detailPublic';

import './App.css';

class App extends Component {
    render() {
        return (     
          <BrowserRouter>
            <div>
              <Navbar staticTop>
                <Navbar.Header>
                  <Navbar.Brand>
                    Login
                    <ViewPublic/>
                    </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
              <Grid>
              <Route path={"/list"} component={listProduct}/>
                <Row>
                  <Col sm={8}>
                    <Layout/>
                  </Col>
                  <Col sm={4}>
                  </Col>
                  </Row>
              </Grid> 
            </div>     
          </BrowserRouter> 
        );
    }
}

export default App;