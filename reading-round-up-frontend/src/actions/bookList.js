export const setBookList = books => {
    return {
        type: "SET_BOOK_LIST",
        books 
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