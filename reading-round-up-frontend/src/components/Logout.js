import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'
import { withRouter } from 'react-router'
import { Form, Button } from 'react-bootstrap'

const Logout = ({ logout, history }) => {

    return (
        <Form onSubmit={ (event) => {
            event.preventDefault()
            logout()
            history.push('/') 
            }
        }>
            <Button variant="primary" type="submit">Log Out</Button>
        </Form>
    )
}

export default withRouter(connect(null, { logout })(Logout));