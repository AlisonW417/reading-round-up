import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm.js'
import bookList from './reducers/bookList'
import newBookForm from './reducers/newBookForm.js'

const reducer = combineReducers({
    user: usersReducer,
    currentUser,
    loginForm,
    signupForm,
    bookList,
    newBookForm
  })
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;