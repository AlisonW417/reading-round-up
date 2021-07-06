import React from 'react'
import { connect } from 'react-redux'
import { updateNewBookForm } from '../actions/newBookForm'
import { createBook } from '../actions/bookList'
import { Form, Button, Container } from 'react-bootstrap'

const NewBookForm = ( { newBookFormData, userId, updateNewBookForm, createBook, history }) => {

    const handleOnChange = event => {
        const newBookData = {
            ...newBookFormData,
            [event.target.name]: event.target.value
        }
        updateNewBookForm(newBookData)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        createBook({
            ...newBookFormData,
            userId
        }, history)
    }

    return (
        <Container>
            <h2>Add a new book to your reading round-up!</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control placeholder="title" name="title" type="text" value={newBookFormData.title} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="author" name="author" type="text" value={newBookFormData.author} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control as="select" placeholder="genre" name="genre" type="select" value={newBookFormData.genre} onChange={handleOnChange}>
                        <option value="Non-fiction">Non-Fiction</option>
                        <option value="Classics">Classics</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Mystery">Mystery/Thriller</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="date finished" name="dateFinished" type="date" value={newBookFormData.dataFinished} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="notes" name="notes" type="textarea" value={newBookFormData.notes} onChange={handleOnChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Add Book</Button>
            </Form>
        </Container>
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        newBookFormData: state.newBookForm,
        userId
    }
}

export default connect(mapStateToProps, { updateNewBookForm, createBook })(NewBookForm);