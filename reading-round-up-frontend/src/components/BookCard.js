import React from 'react'
import { Link } from "react-router-dom"

const BookCard = ({ book }) => {
    return (
        book ?
            <div>
                <h3>{book.attributes.title}</h3>
                <h4>{book.attributes.author}</h4>
                <p>{book.attributes.date_finished}</p>
                <p>{book.attributes.notes}</p>
                <Link to={`/books/${book.id}/edit`}>Edit this book</Link>
            </div> : 
        null
    )
}

export default BookCard