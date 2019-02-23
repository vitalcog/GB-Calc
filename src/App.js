import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {

    const container = {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column'
    }

    const footerStyle = {
      background: '#00bfff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '22px'
    }

    return (
      <div style={container}>
        <Header/>
        <Body>some stuff and things</Body>
        <Footer css={footerStyle}></Footer>
      </div>
    )
  }
}

export default App;
