import React from 'react'
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const BookCard = ({ book }) => {
    return (
        book ?
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{book.attributes.title}</Card.Title>
                    <Card.Subtitle>{book.attributes.author}</Card.Subtitle>
                    <Card.Text>{book.attributes.date_finished}</Card.Text>
                    <Card.Text>{book.attributes.notes}</Card.Text>
                    <Card.Link href={`/books/${book.id}/edit`}>Edit this book</Card.Link>
                </Card.Body>
            </Card> : 
        null
    )
}

export default BookCard