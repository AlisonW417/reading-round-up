import React from 'react'
import { connect } from 'react-redux'
// import Login from './Login.js'
import Logout from './Logout.js'
import { Link } from 'react-router-dom'


const Nav = (props) => {

    return (
        <div>
            { props.currentUser ? <h1>Welcome to Reading Round-up, {props.currentUser.attributes.username}</h1> : <h1>Welcome to Reading Round-up</h1> }
            { props.currentUser ? <Logout /> : null }
            <Link to='/'>Home</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
}  

export default connect(mapStateToProps)(Nav);