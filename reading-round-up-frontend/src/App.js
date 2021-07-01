import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MainContainer from './components/MainContainer'
import BookList from './components/BookList'
import NewBookForm from './components/NewBookForm'
import BookCard from './components/BookCard';
import EditBookForm from './components/EditBookForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, bookList } = this.props
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={() => loggedIn ? <MainContainer /> : <Home />}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/books' component={BookList} />
        <Route exact path='/books/new' component={NewBookForm} />
        <Route exact path='/books/:id' render={props => {
            const book = bookList.find(book => book.id === props.match.params.id)
            return <BookCard book={book} {...props} />
          }
        }/>
        <Route exact path='/books/:id/edit' render={props => {
            const book = bookList.find(book => book.id === props.match.params.id)
            return <EditBookForm book={book} {...props} />
          }
        }/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    bookList: state.bookList
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
