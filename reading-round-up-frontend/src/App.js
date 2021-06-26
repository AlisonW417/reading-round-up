import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MainContainer from './components/MainContainer'
import BookList from './components/BookList'
import NewBookForm from './components/NewBookForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' render={() => loggedIn ? <MainContainer /> : <Home />}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/books' component={BookList} />
        <Route exact path='/books/new' component={NewBookForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
