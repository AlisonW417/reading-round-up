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

export const createBook = bookData => {
    const newBookInfo = {
        trip: {
            title: bookData.title,
            author: bookData.author,
            date_finish: bookData.dateFinished,
            notes: bookData.notes,
            user_id: bookData.user_id
        }
    }
    return dispatch => {
        return fetch('http://localhost:3001/books', {
            credentials: 'include',
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBookInfo)
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
    }
}