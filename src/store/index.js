
import { combineReducers } from 'redux';
import { reducer as foodReducer } from './food';

export const reducer = combineReducers({
  food: foodReducer
});