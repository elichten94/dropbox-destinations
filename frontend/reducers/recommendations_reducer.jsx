import { RECEIVE_CITY_RECOMMENDATIONS } from "../actions/recommendation_actions";

const recommendationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CITY_RECOMMENDATIONS:
      return action.payload;
    default:
      return oldState;
  }
};

export default recommendationsReducer;
