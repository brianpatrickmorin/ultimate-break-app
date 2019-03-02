import React  from 'react';
import {getUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PasswordToggle from './PasswordToggle'
import {Table} from 'react-bootstrap'

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
    <Table striped className="user-table">
      <thead>
      <tr>
        <th>Photo</th>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Gender</th>
        <th>Region</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      {
        users.map((user, index) => (
          <tr key={index}>
            {/*todo add photo alt when adding a selector to fix some data problems*/}
            <td><img src={user.photo} /></td>
            <td>{user.surname}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.region}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td><PasswordToggle password={user.password} /></td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  )


}

const mapDispatchToProps = (dispatch) => ({
  onGetUsers: () => dispatch(getUsers()),
})

const mapStateToProps = (({users}) => ({
  users
}))

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
