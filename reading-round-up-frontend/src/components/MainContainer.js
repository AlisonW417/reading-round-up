import React from 'react'
import BookList from './BookList'
import GenreFilter from './GenreFilter'
import { Container } from 'react-bootstrap'

const MainContainer = ({ books }) => {
    return (
        <Container>
            <div> 
                <GenreFilter books={books} />
            </div>
            <div>
                <BookList />
            </div>
        </Container>
    )
}

export default MainContainer;