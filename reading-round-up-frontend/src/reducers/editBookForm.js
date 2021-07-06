const initialState = {
    title: "",
    author: "",
    genre: "",
    dateFinished: "",
    notes: ""
}

const editBookForm = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_EDIT_BOOK_FORM":
            return action.formData
        case "RESET_EDIT_BOOK_FORM":
            return initialState
        case "SET_FORM_DATA_TO_EDIT":
            return action.bookData
        default:
            return state
    }
}

export default editBookForm