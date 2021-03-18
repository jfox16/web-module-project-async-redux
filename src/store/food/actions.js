
import axios from 'axios';

import {
  FETCH_FOOD_START,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE
} from './actionTypes';

const BASE_URL = 'https://foodish-api.herokuapp.com/api'
const NUM_IMAGES = 20;

export const fetchFood = () => {
  return (dispatch) => {

    dispatch({ type: FETCH_FOOD_START });

    const axiosRequests = [];
    for (let i = 0; i < NUM_IMAGES; i++) {
      axiosRequests.push(axios.get(BASE_URL));
    }

    axios.all(axiosRequests)
      .then(responses => {
        const foodImages = responses.map(res => res.data.image);
        dispatch({ type: FETCH_FOOD_SUCCESS, payload: foodImages });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_FOOD_FAILURE });
      });

    
  }
}