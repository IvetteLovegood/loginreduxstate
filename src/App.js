import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import Layout from './components/Layout';
import NavBar from './components/Navbar';
import Login from './components/Login';
import './App.css';
import store from './store';


var jsonresponse;

class App extends Component {

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
    render() {
        return (
            <BrowserRouter>
            <div>
              <Navbar staticTop>
                <Navbar.Header>
                  <Navbar.Brand>
                   <NavBar/>
                  </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
              <Grid>
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