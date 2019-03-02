import React  from 'react';

export default class PasswordToggle extends  React.Component {
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
    return  <span onClick={this.toggle}>{this.state.passwordVisible ? this.props.password: "•••••"}</span>;
  }
}
