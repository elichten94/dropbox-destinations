import * as APIUtil from '../util/review_api_util'


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS'

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS
})

const receiveReviews = (payload) => {
  return {
    type: RECEIVE_REVIEWS,
    payload
  }
}

export const requestReviews = () => {
  return dispatch => {
    return APIUtil.fetchReviews()
      .then((reviews) => dispatch(receiveReviews(reviews)))
  }
}

const receiveReview = (payload) => {
  return {
    type: RECEIVE_REVIEW,
    payload
  }
}

export const requestReview = (reviewId) => {
  return dispatch => {
    return APIUtil.fetchReview(reviewId)
      .then((payload) => dispatch(receiveReview(payload)))
  }
}

export const createReview = (review) => {
  return dispatch => {
    return APIUtil.createReview(review)
      .then((review) => dispatch(receiveReview(review)),
        errors => {
          dispatch(receiveReviewErrors(errors.responseJSON))
        })
  }
}

export const updateReview = (review) => {
  return dispatch => {
    return APIUtil.updateReview(review)
      .then((review) => dispatch(receiveReview(review)))
  }
}

const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
}

export const deleteReview = (reviewId) => {
  return dispatch => {
    return APIUtil.deleteReview(reviewId)
      .then((review) => {
        dispatch(removeReview(reviewId))
      })
  }
}