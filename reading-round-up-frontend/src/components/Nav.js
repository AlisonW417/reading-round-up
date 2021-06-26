import React from 'react'
import { connect } from 'react-redux'
// import Login from './Login.js'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'


const Nav = (props) => {

    return (
        <div>
            <NavLink exact to='/'>Home  |  </NavLink>
            <NavLink exact to='/books'>My Book List  |  </NavLink>
            <NavLink exact to='/books/new'>Add a New Book</NavLink>
            { props.currentUser ? <Logout /> : null }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
}  

export default connect(mapStateToProps)(Nav);