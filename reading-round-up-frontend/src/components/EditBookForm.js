import React from 'react'
import { connect } from 'react-redux'
import { updateEditBookForm } from '../actions/editBookForm'
import { setFormDataToEdit } from '../actions/editBookForm'
import { updateBook } from '../actions/bookList'

class EditBookForm extends React.Component {
    componentDidMount() {
        this.props.book && this.props.setFormDataToEdit(this.props.book)
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

    render () {
        const { editBookFormData } = this.props
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input placeholder="title" name="title" type="text" value={editBookFormData.title} onChange={this.handleOnChange} />
                <input placeholder="author" name="author" type="text" value={editBookFormData.author} onChange={this.handleOnChange} />
                <input placeholder="date finished" name="dateFinished" type="date" value={editBookFormData.dataFinished} onChange={this.handleOnChange} />
                <input placeholder="notes" name="notes" type="textarea" value={editBookFormData.notes} onChange={this.handleOnChange} />
                <input type="submit" value="Submit" />
            </form>
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

export default connect(mapStateToProps, { updateEditBookForm, updateBook, setFormDataToEdit })(EditBookForm);