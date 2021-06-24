const bookListReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_BOOK_LIST":
            return action.books
        default:
            return state
    }
}

export default bookListReducer;