const bookList = (state = [], action) => {
    switch (action.type) {
        case "SET_BOOK_LIST":
            return action.books
        case "CLEAR_BOOK_LIST":
            return []
        case "ADD_BOOK":
            return state.concat(action.book)
        case "UPDATE_BOOK":
            return state.map(book => book.id === action.book.id ? action.book : book)
        case "DELETE_BOOK":
            return state.filter(book => book.id === action.bookId ? false : true)
        default:
            return state
    }
}

export default bookList;