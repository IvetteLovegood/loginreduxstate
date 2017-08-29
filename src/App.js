import {BrowserRouter, Route} from 'react-router-dom';
import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import Layout from './components/Layout';
import ViewPublic from './components/ViewPublic';
import datos from './components/detailPublic';

import './App.css';

class App extends Component {
    render() {
        return (     
          <BrowserRouter>
          
            <div>
            <div>
                    <Route path={"/datos"} component={datos}/>
                </div>
              <Navbar staticTop>
                  <Navbar.Header>
                      <Navbar.Brand>
                          <a>Login</a>
                          <a><ViewPublic/></a>
                      </Navbar.Brand>
                  </Navbar.Header>
              </Navbar>
              <Grid>
                  <Row>
                      <Col sm={8}>
                      <Layout />
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