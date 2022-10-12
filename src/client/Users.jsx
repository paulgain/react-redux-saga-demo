import React from 'react';
import { connect } from 'react-redux'

import { getUsers } from '../slice/users'
 
const Users = ({ onGetUsers, users, error }) => (
  <>
    <h1>Users</h1>
    <button onClick={onGetUsers}>Get Users</button>
    <ol>
      {users && users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ol>
    {error && (
      <p>{error.message}</p>
    )}
  </>
)

export default connect(
  (state) => ({ 
    users: state.users.list,
    error: state.users.error
  }),
  (dispatch) => ({ onGetUsers: () => dispatch(getUsers())}))
  (Users)
