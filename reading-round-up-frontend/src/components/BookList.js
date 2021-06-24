import React from 'react'
import { connect } from 'react-redux'
import BookCard from './BookCard'

const BookList = (props) => {
    const bookCards = props.books.map(book => <BookCard book={book} key={book.id} />)
    return (
        bookCards.length > 0 ? bookCards : null
    )
}

const mapStateToProps = state => {
    return {
        books: state.bookList
    }
}

export default connect(mapStateToProps)(BookList)