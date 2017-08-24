import React, { Component } from 'react';
import store from '../store';
import { logIn } from '../actionCreators';
import { FormGroup, Form, Button, Col, ControlLabel, FormControl } from 'react-bootstrap';
class Login extends Component {

    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this);

        this.state = {
            user: ""
        }
    }

    render() {

        return (
            <Form horizontal>
			    <FormGroup controlId="formHorizontalEmail">
			        <Col componentClass={ControlLabel} sm={2}> Email
			        </Col>
			        <Col sm={10}>
			        <FormControl type="email" placeholder="Email" />
			        </Col>
			    </FormGroup>
			    <FormGroup controlId="formHorizontalPassword">
			        <Col componentClass={ControlLabel} sm={2}> Password
			        </Col>
			        <Col sm={10}>
			        <FormControl type="password" placeholder="Password" />
			        </Col>
			    </FormGroup>
			    <FormGroup>
			        <Col smOffset={2} sm={10}>
			        <Button onClick={() => this.logIn(true)}>
			            Sign in
			        </Button>
			        </Col>
			    </FormGroup>
			</Form>
        );
    }

    logIn(user) {
        store.dispatch(logIn(user));
        console.log(user);

    }
}

export default Login;