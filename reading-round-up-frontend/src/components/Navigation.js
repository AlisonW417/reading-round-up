import React from 'react'
import { connect } from 'react-redux'
import { Container, Navbar, Nav } from 'react-bootstrap'
// import Login from './Login.js'
import Logout from './Logout.js'
// import { NavLink } from 'react-router-dom'


const Navigation = (props) => {

    return (
        <Container>
            <Navbar>
                <Navbar.Brand href='/'>Reading Round-up</Navbar.Brand>
                <Nav>
                    <Nav.Link href='/books'>My Book List</Nav.Link>
                    <Nav.Link href='/books/new'>Add a New Book</Nav.Link>
                    { props.currentUser ? <Logout /> : null }
                </Nav>
            </Navbar>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
}  

export default connect(mapStateToProps)(Navigation);