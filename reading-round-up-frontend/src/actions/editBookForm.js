export const updateEditBookForm = formData => {
    return {
        type: "UPDATE_EDIT_BOOK_FORM",
        formData 
    }
}

export const resetEditBookForm = () => {
    return {
        type: "RESET_EDIT_BOOK_FORM"
    }
}

export const setFormDataToEdit = book => {
    const bookData = {
        title: book.attributes.title,
        author: book.attributes.author,
        genre: book.attributes.genre,
        dateFinished: book.attributes.date_finished,
        notes: book.attributes.notes
    }
    return {
        type: "SET_FORM_DATA_TO_EDIT",
        bookData
    }
}