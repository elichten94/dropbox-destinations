

import { combineReducers } from 'redux'
import reviewsErrorsReducer from './reviews_error_reducer'

const errorsReducer = combineReducers({
  reviews: reviewsErrorsReducer
});

export default errorsReducer;