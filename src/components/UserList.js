import React  from 'react';
import {getUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PasswordToggle from './PasswordToggle'

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.onGetUsers()
  }

  render() {
    return <UserList
      {...this.props.users}
    />
  }
}

function UserList({users, isLoading, error}) {
  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Gender</th>
        <th>Region</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Password</th>
        <th>Photo</th>
      </tr>
      </thead>
      <tbody>
      {
        users.map((user, index) => (
          <tr key={index}>
            <td>{user.surname}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.region}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td><PasswordToggle password={user.password} /></td>
            <td><img src={user.photo} /></td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )


}

const mapDispatchToProps = (dispatch) => ({
  onGetUsers: () => dispatch(getUsers()),
})

const mapStateToProps = (({users}) => ({
  users
}))

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
