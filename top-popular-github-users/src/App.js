import Header from './components/header';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from './components/container';
import {LOAD} from './actions/actions';
import {INPUT_CITY} from './actions/actions';
import User from './components/users';
import {Err, But, Input} from './components/users-styles';

function mapStateToProps(state) {
  return {
    users: state.users,
    error: state.error,
    city:  state.city
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: (arg) => dispatch(LOAD(arg)),
    inputLog: (arg) => dispatch(INPUT_CITY(arg))
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const {users, load, error, inputLog, city} = this.props;
  
    return ( 
        <div>
          <Header>
            <h2>Most popular Github users in {city === '' ? 'Khmelnytskyi' : city}</h2>
          </Header>
          <Container>
                <Input onChange={(e) => inputLog(e.target.value)}/>
                <But type="submit" value="Search city" onClick={() => load(city)} />
              
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

            {users.length === 0 && city !== '' && <Err>
                <h1>Nothing found  :\</h1>
              </Err>}
          
          </Container>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);