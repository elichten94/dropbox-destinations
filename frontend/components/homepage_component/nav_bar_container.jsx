import { connect } from 'react-redux';
import NavBar from './nav_bar.jsx';


const mapStateToProps = state => ({
//   currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout()),
});


export default connect(null, null)(NavBar);