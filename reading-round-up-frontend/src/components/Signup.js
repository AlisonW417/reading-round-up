import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'
import { Form, Container, Button } from 'react-bootstrap'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    const handleOnChange = (event) => {
        const newFormInfo = {
            ...signupFormData,
            [event.target.name]: event.target.value
        }
        updateSignupForm(newFormInfo)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault() 
        signup(signupFormData, history)
    }

    return (
        <Container>
            <Form onSubmit={ handleOnSubmit }>
                <Form.Group>
                    <Form.Control placeholder="name" name="name" type="text" value={ signupFormData.name } onChange={ handleOnChange } />
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="username" name="username" type="text" value={ signupFormData.username } onChange={ handleOnChange } />
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="password" name="password" type="password" value={ signupFormData.password } onChange={ handleOnChange } />
                </Form.Group>
                <Button variant="primary" type="submit">Sign up</Button>
            </Form>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);