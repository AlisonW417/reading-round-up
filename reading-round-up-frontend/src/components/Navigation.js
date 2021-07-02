import React from 'react'
import { connect } from 'react-redux'
import { Container, Navbar, Nav } from 'react-bootstrap'
// import Login from './Login.js'
import Logout from './Logout.js'
// import { NavLink } from 'react-router-dom'


const Navigation = (props) => {

    return (
        <Container>
            <Navbar bg="primary" variant="dark" className="mb-3">
                <Container>
                    <Navbar.Brand href='/'>Reading Round-up</Navbar.Brand>
                    <Navbar.Collapse>
                    { props.currentUser ? 
                    <Nav className="me-auto">
                        
                        <Nav.Link href='/books'>My Book List</Nav.Link>
                        <Nav.Link href='/books/new'>Add a New Book</Nav.Link>
                    </Nav> : null }
                    </Navbar.Collapse>
                    <Nav className="justify-content-end">{ props.currentUser ? <Logout /> : null }</Nav>
                </Container>
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