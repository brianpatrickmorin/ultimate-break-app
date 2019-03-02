import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      //todo I think it would be fun to add a search that will look in phone, email, name, and region for a match and to filter the results that way
      <Container>
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container>
                <h1>EF Ultimate Break Users</h1>
                <p>
                  View and search users below.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <UserList/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
