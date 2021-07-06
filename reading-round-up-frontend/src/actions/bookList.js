import { resetNewBookForm } from "./newBookForm"
import { resetEditBookForm } from "./editBookForm"

export const setBookList = books => {
    return {
        type: "SET_BOOK_LIST",
        books 
    }
}

export const clearBookList = () => {
    return {
        type: "CLEAR_BOOK_LIST"
    }
}

export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        book
    }
}

export const updateBookSuccess = (book) => {
    return {
        type: "UPDATE_BOOK",
        book
    }
}

export const deleteBookSuccess = (bookId) => {
    return {
        type: "DELETE_BOOK",
        bookId
    }
}

export const getBookList = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/books", {
            credentials: 'include',    
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(r => r.json())
        .then(resp => {
            console.log(resp)
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setBookList(resp.data))
            }
        })
        .catch(err => console.log(err))
    }
}

export const createBook = (bookData, history) => {
    return dispatch => {
        const newBookInfo = {
            book: {
                title: bookData.title,
                author: bookData.author,
                genre: bookData.genre,
                date_finished: bookData.dateFinished,
                notes: bookData.notes,
                user_id: bookData.userId
            }
        }
        return fetch('http://localhost:3001/books', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBookInfo)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(addBook(resp.data))
                dispatch(resetNewBookForm())
                history.push(`/books/${resp.data.id}`)
            }
        })
    }
}

export const updateBook = (bookData, history) => {
    return dispatch => {
        const updatedBookInfo = {
            book: {
                title: bookData.title,
                author: bookData.author,
                genre: bookData.genre,
                date_finished: bookData.dateFinished,
                notes: bookData.notes,
                user_id: bookData.userId
            }
        }
        return fetch(`http://localhost:3001/books/${bookData.bookId}`, {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBookInfo)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(updateBookSuccess(resp.data))
                dispatch(resetEditBookForm())
                history.push(`/books/${resp.data.id}`)
            }
        })
    }
}

export const deleteBook = (bookId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/books/${bookId}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            dispatch(deleteBookSuccess(bookId))
            history.push('/')
        })
    }
}