import React from 'react';
import { logIn } from '../actionCreators';
import { connect } from 'react-redux';
import { FormGroup, Form, Col, ControlLabel, FormControl } from 'react-bootstrap';


const Login = ({ user, logIn }) => {
    return (
        <Form horizontal>
			    <FormGroup controlId="formHorizontalEmail">
			        <Col componentClass={ControlLabel} sm={2}> LISTA DE PRODUCTOS
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