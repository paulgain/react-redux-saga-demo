import axios from 'axios'

import config from '../config'

export const getUsers = async() => {
  const { data } = await axios.get(`${config.apiRoot}/api/users`)
  return data
}
