import api from '../utils/api';
import { setAlert } from './alert';

import {
  GET_USER,
  GET_USERS,
  USER_ERROR,
  UPDATE_USER,
  ADD_USER,
  DELETE_USER,
} from './types';

// Get current users profile
// export const getCurrentUser = () => async (dispatch) => {
//   try {
//     const res = await api.get('/profile/me');

//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Get all Users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await api.get('/users');

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get User by ID
export const getUserById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/users/${userId}`);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
