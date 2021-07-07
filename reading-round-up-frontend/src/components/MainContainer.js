import React from 'react'
import ImageContainer from './ImageContainer'
import BookList from './BookList'
import Home from './Home'
// import GenreFilter from './GenreFilter'
import { Container } from 'react-bootstrap'

const MainContainer = ({ books, currentUser }) => {
    return (
        currentUser ? 
        <Container>
            <div> 
                <ImageContainer />
            </div>
            <div>
                <BookList books={books} />
            </div>
        </Container>
        : 
        <Container>
            <div> 
                <ImageContainer />
            </div>
            <div>
                <Home />
            </div>
        </Container>
    )
}

export default MainContainer;