import React from 'react';
import { connect } from 'react-redux'

import { LOAD_USERS_REQUEST } from './actions/index'

const Users = ({ users, error, onGetUsers }) => {
  return (
    <>
    <h1>Users</h1>
    <button onClick={onGetUsers}>Get Users</button>
    <ol>
      {users.map((user) => (
        <li key={user.firstName}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ol>
    {error && (
      <>
        <p>{error.message}</p>
      </>
    )}
  </>
  )
}

export default connect(
  ({ users, error }) => ({ users: users || [], error }),
  (dispatch) => ({ onGetUsers: () => dispatch({ type: LOAD_USERS_REQUEST }) }))
  (Users)
