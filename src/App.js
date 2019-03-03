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
                <Row>
                  <Col md={4}>
                    <img src="https://www.efultimatebreak.com/css/img/header/UB-Logo-Black.png" style={{width: "100%"}}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>
                      View and search users below.
                    </h2>
                    <Form.Control type="text" placeholder="Search any field" value={this.state.search} onChange={this.handleChange}/>
                  </Col>
                </Row>
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
