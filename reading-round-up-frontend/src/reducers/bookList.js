const bookList = (state = [], action) => {
    switch (action.type) {
        case "SET_BOOK_LIST":
            return action.books
        case "CLEAR_BOOK_LIST":
            return []
        default:
            return state
    }
}

export default bookList;