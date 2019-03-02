import axios from 'axios'
import {API_ENDPOINT} from '../config'

const getUsersSuccess = users => ({
  type: 'users:LOAD_SUCCESS',
  payload: users
});

const getUsersStarted = () => ({
  type: 'users:LOAD_START'
});

const getUsersFailure = error => ({
  type: 'users:LOAD_FAILED',
  payload: {
    error
  }
});

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersStarted())
    return axios.get(API_ENDPOINT)
      .then((response) => {
        dispatch(getUsersSuccess(response.data))
      })
      .catch(err => {
        dispatch(getUsersFailure(err))
      })
  }
}
