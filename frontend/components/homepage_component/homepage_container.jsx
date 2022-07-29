import { connect } from 'react-redux';
import splashPage from './homepage.jsx';
import {requestReviews} from '../../actions/review_actions'

const mapStateToProps = (state) => {
  return{
    motto: 'Ready for adventure?',
    reviews: Object.values(state.entities.reviews)

  }
}

const mDTP = (dispatch) => {
  return {
    requestReviews: (() => dispatch(requestReviews())),
  }
}

export default connect(mapStateToProps, mDTP)(splashPage);