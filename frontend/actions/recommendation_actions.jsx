import * as APIUtil from '../util/recommendation_api_util'


export const RECEIVE_CITY_RECOMMENDATIONS  = 'RECEIVE_CITY_RECOMMENDATIONS'

const receiveCityRecommendations = (payload) => {
  return {
    type: RECEIVE_CITY_RECOMMENDATIONS,
    payload
  }
}

export const requestCityRecommendations = (city_name) => {
  return dispatch => {
    return APIUtil.fetchCityRecommendations(city_name)
      .then((payload) => dispatch(receiveCityRecommendations(payload)))
  }
} 
