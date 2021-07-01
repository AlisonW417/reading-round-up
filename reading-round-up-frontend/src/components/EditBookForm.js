import React from 'react'
import { connect } from 'react-redux'
import { updateEditBookForm } from '../actions/editBookForm'
import { setFormDataToEdit } from '../actions/editBookForm'
import { updateBook, deleteBook } from '../actions/bookList'
import { Form, Button, Container } from 'react-bootstrap'

class EditBookForm extends React.Component {
    componentDidMount() {
        this.props.book && this.props.setFormDataToEdit(this.props.book)
    }

    componentDidUpdate(prevProps) {
        this.props.book && !prevProps.book && this.props.setFormDataToEdit(this.props.book)
    }

    handleOnChange = event => {
        const { editBookFormData } = this.props
        const updatedBookData = {
            ...editBookFormData,
            [event.target.name]: event.target.value
        }
        this.props.updateEditBookForm(updatedBookData)
    }

    handleOnSubmit = event => {
        const { editBookFormData, userId, book, history } = this.props
        event.preventDefault()
        this.props.updateBook({
            ...editBookFormData,
            userId,
            bookId: book.id
        }, history)
    }

    handleOnClick = () => {
        const bookId = this.props.book ? this.props.book.id : null
        this.props.deleteBook(bookId, this.props.history)
    }

    render () {
        return (
            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                        <Form.Control placeholder="author" name="author" type="text" value={this.props.editBookFormData.author} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="title" name="title" type="text" value={this.props.editBookFormData.title} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="date finished" name="dateFinished" type="date" value={this.props.editBookFormData.dataFinished} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="notes" name="notes" type="textarea" value={this.props.editBookFormData.notes} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">Update Book</Button>
                    </Form.Group>
                        <Button variant="danger" onClick={this.handleOnClick}>Delete Book</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        editBookFormData: state.editBookForm,
        userId
    }
}

export default connect(mapStateToProps, { updateEditBookForm, updateBook, setFormDataToEdit, deleteBook })(EditBookForm);