import React from 'react'
import { connect } from 'react-redux'
import { updateNewBookForm } from '../actions/newBookForm'
import { createBook } from '../actions/bookList'

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
        })
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input placeholder="title" name="title" type="text" value={newBookFormData.title} onChange={handleOnChange} />
            <input placeholder="author" name="author" type="text" value={newBookFormData.author} onChange={handleOnChange} />
            <input placeholder="date finished" name="date_finished" type="date" value={newBookFormData.dataFinished} onChange={handleOnChange} />
            <input placeholder="notes" name="notes" type="textarea" value={newBookFormData.notes} onChange={handleOnChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        newBookFormData: state.newBookForm,
        userId: state.currentUser.id
    }
}

export default connect(mapStateToProps, { updateNewBookForm, createBook })(NewBookForm);