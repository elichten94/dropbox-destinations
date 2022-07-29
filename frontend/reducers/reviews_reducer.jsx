import { 
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW 
} from '../actions/review_actions'

const ReviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.payload;
    case RECEIVE_REVIEW:
      nextState[action.payload.review.id] = action.payload.review;
      return nextState;
    case REMOVE_REVIEW:
      delete nextState[action.reviewId]
      return nextState;
    default:
      return oldState;
  }
}

export default ReviewsReducer;