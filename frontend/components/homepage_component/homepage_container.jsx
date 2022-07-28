import { connect } from 'react-redux';
import splashPage from './homepage';

const mapStateToProps = (state, ownProps) => {
  return{
    motto: 'Ready for adventure?'
  }
}

export default connect(mapStateToProps, null)(splashPage);