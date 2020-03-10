import { 
  LOAD_USERS_REQUEST, 
  LOAD_USERS_FAILURE,
  LOAD_USERS_SUCCESS
} from '../actions'

export default (state = {}, { type, users, error }) => {
  switch (type) {
    case LOAD_USERS_REQUEST:
      return {
        ...state,
      }
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users,
      }
    case LOAD_USERS_FAILURE:
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}
