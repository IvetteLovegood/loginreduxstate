import React from 'react';
import { logIn } from '../actionCreators';
import { connect } from 'react-redux';
import { FormGroup, Form, Button, Col, ControlLabel, FormControl } from 'react-bootstrap';


const Login = ({ user, logIn }) => {
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
			        <Button onClick={() => logIn(true)}>
			            Sign in
			        </Button>
			        </Col>
			    </FormGroup>
			</Form>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn(user) {
            dispatch(logIn(user));
            console.log(user);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);