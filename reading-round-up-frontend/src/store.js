import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm.js'
import bookList from './reducers/bookList'
import newBookForm from './reducers/newBookForm.js'
import editBookForm from './reducers/editBookForm.js'

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    bookList,
    newBookForm,
    editBookForm
  })
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;