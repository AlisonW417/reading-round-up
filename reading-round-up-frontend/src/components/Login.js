import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = (props) => {
    const handleOnChange = (event) => {

    }

    return (
        <form>
            <input placeholder="username" name="username" type="text" value={props.username} onChange={handleOnChange} />
            <input placeholder="password" name="password" type="password" value={props.password} onChange={handleOnChange} />
            <input type="submit" value="Log in" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps)(Login);
