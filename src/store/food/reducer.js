
import {
  FETCH_FOOD_START,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: '',
  // images: []
  images: [
    "https://foodish-api.herokuapp.com/images/dessert/dessert21.jpg",
    "https://foodish-api.herokuapp.com/images/burger/burger54.jpg",
    "https://foodish-api.herokuapp.com/images/burger/burger55.jpg",
    "https://foodish-api.herokuapp.com/images/pizza/pizza60.jpg",
    "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken8.jpg",
    "https://foodish-api.herokuapp.com/images/dessert/dessert8.jpg",
    "https://foodish-api.herokuapp.com/images/dessert/dessert21.jpg",
    "https://foodish-api.herokuapp.com/images/burger/burger54.jpg",
    "https://foodish-api.herokuapp.com/images/burger/burger55.jpg",
    "https://foodish-api.herokuapp.com/images/pizza/pizza60.jpg",
    "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken8.jpg",
    "https://foodish-api.herokuapp.com/images/dessert/dessert8.jpg",
    "https://foodish-api.herokuapp.com/images/dessert/dessert21.jpg",
    "https://foodish-api.herokuapp.com/images/burger/burger54.jpg",
    "https://foodish-api.herokuapp.com/images/burger/burger55.jpg",
    "https://foodish-api.herokuapp.com/images/pizza/pizza60.jpg",
    "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken8.jpg",
    "https://foodish-api.herokuapp.com/images/dessert/dessert8.jpg",
  ]
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {

    case FETCH_FOOD_START:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_FOOD_SUCCESS:
      return {
        ...state,
        images: action.payload,
        isLoading: false
      };

    case FETCH_FOOD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;

  }
}