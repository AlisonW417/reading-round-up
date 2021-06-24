import React from 'react'

const BookCard = ({ book }) => {
    return (
        <p>{book.attributes.title}</p>
    )
}

export default BookCard