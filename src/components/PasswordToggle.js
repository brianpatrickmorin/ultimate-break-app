import React  from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

export default class PasswordToggleContainer extends  React.Component {
  constructor() {
    super()

    this.state = {passwordVisible: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      passwordVisible: !prevState.passwordVisible
    }));
  }

  render() {
    return <PasswordToggle
      password={this.props.password}
      passwordVisible={this.state.passwordVisible}
      toggle={this.toggle}
    />
  }
}

function PasswordToggle({password, passwordVisible, toggle}) {
  return (
    <Container className={"password-toggle"}>
      <Row>
        <Col>
          <input type={passwordVisible ? "text" : "password"} value={passwordVisible ? password : "--------"} readonly/>
        </Col>
      </Row>
      <Row>
        <Col>
          {/*<button type="button" className="btn btn-link" onClick={toggle}>{passwordVisible ? "Hide" : "Show"}</button>*/}
          <Button variant="link" onClick={toggle}>{passwordVisible ? "Hide" : "Show"}</Button>

        </Col>
      </Row>
    </Container>
  )
}
