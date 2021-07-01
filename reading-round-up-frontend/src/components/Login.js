import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'
import { Form, Button, Container } from 'react-bootstrap'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
    const handleOnChange = (event) => {
        const newFormInfo = {
            ...loginFormData,
            [event.target.name]: event.target.value
        }
        updateLoginForm(newFormInfo)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault() 
        login(loginFormData, history)
    }

    return (
        <Container>
            <Form onSubmit={ handleOnSubmit }>
                <Form.Group>
                    <Form.Control placeholder="username" name="username" type="text" value={ loginFormData.username } onChange={ handleOnChange } />
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="password" name="password" type="password" value={ loginFormData.password } onChange={ handleOnChange } />
                </Form.Group>
                <Button variant="primary" type="submit">Log in</Button>
            </Form>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
