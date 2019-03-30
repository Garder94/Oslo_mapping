import axios from 'axios';
import { GET_PEOPLE } from './types';

// Get current profile
export const getPeople = id => dispatch => {
  axios
    .get(`/api/dataset/${id}`)
    .then(res =>
      dispatch({
        type: GET_PEOPLE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PEOPLE,
        payload: {}
      })
    );
};
