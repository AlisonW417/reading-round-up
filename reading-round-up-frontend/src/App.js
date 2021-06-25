import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Logout from './components/Logout'
import MainContainer from './components/MainContainer'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { Route } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/login' component={Login} />
        <MainContainer />
      </div>
    );
  }
}


export default connect(null, { getCurrentUser })(App);
