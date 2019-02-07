import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import Header from './components/header';
import Container from './components/container';
import Users from './components/users';
import {LOAD} from './actions/actions';
import User from './components/users';



function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(LOAD()),
  }
}

const theme = {
  font: "Calibri"
};

class App extends Component {

  componentDidMount() {
    this.props.load();
    console.log(this.props.users[0]);
  }

  render() {
    const {users, load} = this.props;
    let usrs = [1, 2, 3, 4, 5];
    return (
      <ThemeProvider theme={theme}> 
        <div>
          <Header>
            <h2 onClick={() => {load()}}>Most popular Github users in Khmelnytskyi</h2>
          </Header>
          <Container>
            {users.length ? users[0].login : 'search somebody'}
            
            {usrs.map((user) => {
              return(<User />);
            })}
          
          </Container>
        </div>
      </ThemeProvider>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(App);