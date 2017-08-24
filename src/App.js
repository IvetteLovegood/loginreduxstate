import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import Layout from './components/Layout';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
              <Navbar staticTop>
                  <Navbar.Header>
                      <Navbar.Brand>
                          <a>Login</a>
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
        );
    }
}

export default App;