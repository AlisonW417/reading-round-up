import React from 'react'
// import { connect } from 'react-redux'
import BookCard from './BookCard'
import { Container, CardDeck } from 'react-bootstrap'

const BookList = ({books}) => {
    const bookCards = books.map(book => <BookCard book={book} key={book.id} />)
    return (
        <Container>
            <h1>My Book List</h1>
            <CardDeck>
                { bookCards.length > 0 ? bookCards : <h2>No books logged yet. Add a book to get started!</h2> }
            </CardDeck>
        </Container>
    )
}

// const mapStateToProps = state => {
//     return {
//         books: state.bookList
//     }
// }

export default BookList