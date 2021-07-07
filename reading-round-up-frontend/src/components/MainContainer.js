import React from 'react'
import ImageContainer from './ImageContainer'
import BookList from './BookList'
import Home from './Home'
// import GenreFilter from './GenreFilter'
import { Container } from 'react-bootstrap'

const MainContainer = ({ books, currentUser }) => {
    return (
        <Container>
            <div>
                <ImageContainer />
            </div>
            <div>
                { currentUser ? <BookList books={books} /> : <Home /> }
            </div>
        </Container>
    )
}

export default MainContainer;