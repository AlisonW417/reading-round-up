import React from 'react'
import { connect } from 'react-redux'
// import Login from './Login.js'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'


const Nav = (props) => {

    return (
        <div>
            <NavLink to='/'>Home  |  </NavLink>
            <NavLink to='/books/new'>Add a New Book</NavLink>
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