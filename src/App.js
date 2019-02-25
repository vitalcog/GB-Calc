import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import {} from './store';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  
  render() {

    const container = {
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'scroll'
    }

    return (
      <div style={container}>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

// sets our initial state to this component's props
function mapToProps(state) {
  return {
    appColorPattern: state.appColors
  }
}

// allows us to update values in store
function dispatchToProps() {
  return {}
}

export default connect(mapToProps, dispatchToProps)(App);
