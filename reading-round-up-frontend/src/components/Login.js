import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {
    const handleOnChange = (event) => {
        const newFormInfo = {
            ...loginFormData,
            [event.target.name]: event.target.value
        }
        updateLoginForm(newFormInfo)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault() 
        login(loginFormData)
    }

    return (
        <form onSubmit={ handleOnSubmit }>
            <input placeholder="username" name="username" type="text" value={ loginFormData.username } onChange={ handleOnChange } />
            <input placeholder="password" name="password" type="password" value={ loginFormData.password } onChange={ handleOnChange } />
            <input type="submit" value="Log in" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
