const initialState = {
    title: "",
    author: "",
    genre: "",
    dateFinished: "",
    notes: "",
    rating: ""
}

const newBookForm = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_BOOK_FORM":
            return action.formData
        case "RESET_NEW_BOOK_FORM":
            return initialState
        default:
            return state
    }
}

export default newBookForm