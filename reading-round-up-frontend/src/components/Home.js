import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Please <Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link>.</h2>
    </div>
)

export default Home;