
import {
  FETCH_FOOD_START,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: '',
  images: []
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
        images: [ ...state.images, ...action.payload ],
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