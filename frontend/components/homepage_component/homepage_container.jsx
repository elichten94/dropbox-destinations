import { connect } from 'react-redux';
import splashPage from './homepage';

const mapStateToProps = (state, ownProps) => {
  return{
    motto: 'Ready for adventure?'
  }
}

export const SplashContainer =  connect(mapStateToProps, null)(splashPage);