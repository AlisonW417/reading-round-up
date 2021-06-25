import React from 'react'
import { connect } from 'react-redux'
import { updateNewBookForm } from '../actions/newBookForm'

const NewBookForm = ( { newBookFormData, history }) => {

    const handleOnChange = event => {
        const newBookData = {
            ...newBookFormData,
            [event.target.name]: event.target.value
        }
        updateNewBookForm(newBookData)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input placeholder="title" name="title" type="text" value={newBookFormData.title} onChange={handleOnChange} />
            <input placeholder="author" name="author" type="text" value={newBookFormData.author} onChange={handleOnChange} />
            <input placeholder="date finished" name="date_finished" type="date" value={newBookFormData.data_finished} onChange={handleOnChange} />
            <input placeholder="notes" name="notes" type="textarea" value={newBookFormData.notes} onChange={handleOnChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        newBookFormData: state.newBookForm
    }
}

export default connect(mapStateToProps, { updateNewBookForm })(NewBookForm);