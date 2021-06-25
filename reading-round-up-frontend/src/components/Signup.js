import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

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
        <form onSubmit={ handleOnSubmit }>
            <input placeholder="name" name="name" type="text" value={ signupFormData.name } onChange={ handleOnChange } />
            <input placeholder="username" name="username" type="text" value={ signupFormData.username } onChange={ handleOnChange } />
            <input placeholder="password" name="password" type="password" value={ signupFormData.password } onChange={ handleOnChange } />
            <input type="submit" value="Sign up" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);