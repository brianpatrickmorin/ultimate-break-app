import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList';
import {Container, Row, Col, Jumbotron, Form} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()

    this.state = {search: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container>
                <h1>EF Ultimate Break Users</h1>
                <p>
                  View and search users below.
                </p>
                <Form.Control type="text" placeholder="Search any field" value={this.state.search} onChange={this.handleChange}/>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <UserList search={this.state.search}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
