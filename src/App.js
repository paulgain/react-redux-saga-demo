import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LOAD_USERS_REQUEST } from './actions'
import './app.css';

function App({ users, error, dispatch }) {

  const onGetUsers = () => {
    dispatch({ type: LOAD_USERS_REQUEST })
  }

  return (
    <div className="app">
      <div className="content">
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
      </div>
    </div>
  );
}

App.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps({ users, error }) {
  return {
    users: users || [],
    error,
  }
}

export default connect(mapStateToProps)(App)
