import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList';
import {Container, Row, Col, Jumbotron, Form, Button} from 'react-bootstrap';

class AppContainer extends Component {
  constructor() {
    super()

    this.state = {search: '', sortOn: {field: 'displayName', ascending: true}}
    this.handleChange = this.handleChange.bind(this)
    this.setSortOn = this.setSortOn.bind(this)
  }

  handleChange(event) {
    this.setState({search: event.target.value})
  }

  setSortOn(event) {
    event.persist()

    this.setState(prevState => {
      if (prevState.sortOn.field === event.target.name) {
        return {sortOn: {field: event.target.name, ascending: !prevState.sortOn.ascending}}
      }
      return {sortOn: {field: event.target.name, ascending: true}}
    })
  }

  render() {
    return <App search={this.state.search} handleChange={this.handleChange} sortOn={this.state.sortOn}
                setSortOn={this.setSortOn}/>
  }
}

function App({search, handleChange, sortOn, setSortOn}) {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron fluid>
            <Container>
              <Row>
                <Col md={4}>
                  <img
                    src="https://www.efultimatebreak.com/css/img/header/UB-Logo-Black.png"
                    style={{width: '100%'}}
                    alt="EF Ultimate Break"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>
                    View search, and sort users below.
                  </h2>
                  <Form.Control type="text" placeholder="Search any field" value={search} onChange={handleChange}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={setSortOn} name="displayName" variant="link">Name</Button>
                  <Button onClick={setSortOn} name="region" variant="link">Region</Button>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col>
          <UserList search={search} sortOn={sortOn}/>
        </Col>
      </Row>
    </Container>
  );
}

export default AppContainer;
