import Header from './components/header';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from './components/container';
import {LOAD} from './actions/actions';
import User from './components/users';
import {Err} from './components/users-styles';

function mapStateToProps(state) {
  return {
    users: state.users,
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(LOAD()),
  }
}

class App extends Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
    const {users, load, error} = this.props;
  
    return ( 
        <div>
          <Header>
            <h2>Most popular Github users in Khmelnytskyi</h2>
          </Header>
          <Container>
            {error && <Err>
                <h1>Try later - something went wrong :\</h1>
              </Err>
            }
            {users.map((user) => {
              return(
                <User 
                  avatarUrl={user.avatar_url} 
                  key={user.id}
                  login={user.login}
                  starsCount={user.starsCount}
                />
                );
            })}
          
          </Container>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);