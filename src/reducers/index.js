import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catsReducer from './cats';
import dogsReducer from './dogs';

const rootReducer = combineReducers({
  cats: catsReducer,
  dogs: dogsReducer,
  router: routerReducer,
});

export default rootReducer;
