import React from 'react';
import {getUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PasswordToggle from './PasswordToggle'
import {Image, Table, Container, Row, Col, Card} from 'react-bootstrap'
import selectUsers from '../selectors/selectUsers';

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.onGetUsers()
  }

  render() {
    return <UserList
      filteredUsers={this.props.filteredUsers}
      {...this.props.usersState}
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

  return (filteredUsers.length > 0) ?
    (
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
              <td>
                <Image src={user.photo} roundedCircle alt={user.displayName}/>
              </td>
              <td>{user.displayName}{user.isBirthdayMonth && ' 🎂'}</td>
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
    ) : (
      <Container>
        <Row>
          <Col>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Oops! No Matches</Card.Title>
                <Card.Text>Try another search.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    )


}

const mapDispatchToProps = (dispatch) => ({
  onGetUsers: () => dispatch(getUsers()),
})

const mapStateToProps = (({users}) => {
  return {
    usersState: {
      ...users,
      users: selectUsers(users.users)
    }
  }
})

function anyUserFieldContainsSearch(user, search) {
  const searchLower = search.toLowerCase()
  return ['name', 'surname', 'region', 'email', 'phone'].some(field => user[field].toLowerCase().includes(searchLower))
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  const sortOn = ownProps.sortOn
  const filteredUsers = (ownProps.search && propsFromState.usersState.users ?
    propsFromState.usersState.users.filter(u => anyUserFieldContainsSearch(u, ownProps.search))
    : propsFromState.usersState.users)
    .sort((a, b) => {
      const ascendingMultipler = sortOn.ascending ? 1 : -1
      return ((a[sortOn.field] > b[sortOn.field]) ? 1 : ((b[sortOn.field] > a[sortOn.field]) ? -1 : 0)) * ascendingMultipler;
    })

  return {
    filteredUsers,
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserListContainer)
