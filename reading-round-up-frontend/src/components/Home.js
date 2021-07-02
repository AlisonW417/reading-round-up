import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'

const Home = () => (
    <Container>
        <div>
            <Card>
                <h1>Welcome to Reading Round-up!</h1>
                <h2>Please <Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link>.</h2>
            </Card>
        </div>
    </Container>
)

export default Home;