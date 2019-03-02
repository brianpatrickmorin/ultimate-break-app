import React  from 'react';

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
  return  <span onClick={toggle}>{passwordVisible ? password: "•••••"}</span>;

}
