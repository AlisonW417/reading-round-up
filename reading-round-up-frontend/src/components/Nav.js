import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'


const Nav = (props) => {

    return (
        <div>
            { props.currentUser ? <h1>Welcome to Reading Round-up, {props.currentUser.attributes.username}</h1> : <h1>Welcome to Reading Round-up</h1> }
            { props.currentUser ? <Logout /> : <Login /> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
}  

export default connect(mapStateToProps)(Nav);