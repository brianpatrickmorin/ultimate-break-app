import React from 'react';
import {getUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PasswordToggle from './PasswordToggle'
import {Image, Table} from 'react-bootstrap'

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.onGetUsers()
  }

  render() {
    return <UserList
      filteredUsers={this.props.filteredUsers}
      {...this.props.users}
    />
  }
}

function UserList({filteredUsers, isLoading, error}) {
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
        <th>Name</th>
        <th>Gender</th>
        <th>Region</th>
        <th>Contact</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      {
        filteredUsers.map((user, index) => (
          <tr key={index}>
            {/*todo add photo alt when adding a selector to fix some data problems*/}
            <td>
              <Image src={user.photo} roundedCircle/>
            </td>
            <td>{user.surname}, {user.name}</td>
            <td>{user.gender}</td>
            <td>{user.region}</td>
            <td>
              <div>{user.phone}</div>
              <a href={'mailto:' + user.email}>{user.email}</a>
            </td>
            <td><PasswordToggle password={user.password}/></td>
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

const mapStateToProps = (({users}) => {
  return {users}
})

// todo this should use natural string comparison for upper/lower case and regional changes to characters
function anyUserFieldContainsSearch(user, search) {
  return ["name", "surname", "region", "email", "phone"].some(field => user[field].includes(search))
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {

  const filteredUsers = ownProps.search && propsFromState.users.users ?
    propsFromState.users.users.filter(u => anyUserFieldContainsSearch(u, ownProps.search)) : propsFromState.users.users

  return {
    filteredUsers,
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserListContainer)
