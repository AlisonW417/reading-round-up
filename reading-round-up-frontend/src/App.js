import React from 'react';
import './App.css';
import Nav from './components/Nav'
import MainContainer from './components/MainContainer'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <MainContainer />
      </div>
    );
  }
}


export default connect(null, { getCurrentUser })(App);
