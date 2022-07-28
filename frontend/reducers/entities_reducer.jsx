import { combineReducers } from "redux";
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  reviews: reviewsReducer,
});

export default entitiesReducer;