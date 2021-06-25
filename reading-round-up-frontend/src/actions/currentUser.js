import { resetLoginForm } from "./loginForm"
import { getBookList } from "./bookList"
import { resetSignupForm } from "./signupForm"

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = loginInfo => {
    // console.log(loginInfo)
    return (dispatch) => {
        return fetch("http://localhost:3001/login", {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(r => r.json())
        .then(resp => {
            console.log(resp)
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getBookList())
                dispatch(resetLoginForm())
            }
        })
        .catch(err => console.log(err))
    }
}

export const signup = signupInfo => {
    return (dispatch) => {
        const newUserInfo = {
            user: signupInfo
        }
        return fetch("http://localhost:3001/signup", {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUserInfo)
        })
        .then(r => r.json())
        .then(resp => {
            console.log(resp)
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getBookList())
                dispatch(resetSignupForm())
            }
        })
        .catch(err => console.log(err))
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/get_current_user", {
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
                dispatch(setCurrentUser(resp.data))
                dispatch(getBookList())
            }
        })
        .catch(err => console.log(err))
    }
}

