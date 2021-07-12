import React from 'react'
// import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

const BookCard = ({ book }) => {

    return (
        book ?
        <Row className="mb-3 justify-content-center">
            <Col xs="auto" md="4">
                <Card border="primary" style={{ width: '18rem' }} >
                    <Card.Body>
                        <Card.Title>{book.attributes.title}</Card.Title>
                        <Card.Subtitle>Author: {book.attributes.author}</Card.Subtitle>
                        <Card.Text>Genre: {book.attributes.genre} </Card.Text>
                        <Card.Text>Date Finished: {book.attributes.date_finished}</Card.Text>
                        <Card.Text>Notes: {book.attributes.notes}</Card.Text>
                        <Card.Link href={`/books/${book.id}/edit`}>Edit this book</Card.Link>
                    </Card.Body>
                </Card> 
            </Col> 
        </Row>: 
        null
    )
}

export default BookCard