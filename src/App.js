import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      //todo I think it would be fun to add a search that will look in phone, email, name, and region for a match and to filter the results that way
      <UserList />
    );
  }
}

export default App;
