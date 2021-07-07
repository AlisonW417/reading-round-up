import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Home = () => (
    <Container>
        <div>
            <h1>Welcome to Reading Round-up!</h1>
            <h2>Please <Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link>.</h2>
        </div>
    </Container>
)

export default Home;