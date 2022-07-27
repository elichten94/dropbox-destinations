import { connect } from 'react-redux';
import splashPage from 'dropbox-destinations/frontend/components/homepage_component/homepage';

const mapStateToProps = (state, ownProps) => {
  return{
    motto: 'Ready for adventure?'
  }
}

export default connect(mapStateToProps, null)(splashPage);