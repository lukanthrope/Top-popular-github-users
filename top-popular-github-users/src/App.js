import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import Header from './components/header';
import Container from './components/container';

import './App.css';

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch({type: 'LOAD'}),
  }
}
/*
function App({value, increment, decrement}) {
  return (
    <div className="App"> 
      <h1>HELLO WORLD count={value}</h1>

      <hr />

      <button onClick={(ev) => increment()}>Increment</button>
      <button onClick={(ev) => decrement()}>Decrement</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/

const theme = {
  font: "Calibri"
};

function App({users, load}) {
  return (
    <ThemeProvider theme={theme}> 
      <div onLoad={() => load()}>
        <Header>
          <h2>Most popular Github users in Khmelnytskyi</h2>
        </Header>
        <Container>
          {users.length ? users[0].login : 'search somebody'}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);