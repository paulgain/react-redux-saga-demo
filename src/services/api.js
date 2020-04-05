import axios from 'axios'

import config from '../config'

const callApi = async(endpoint) => {
  const { data } = await axios.get(`${config.apiRoot}${endpoint}`)
  return data
}

export const getUsers = () => callApi(`/api/users`)
