import { connect } from 'react-redux';
import SearchBar from './search_bar.jsx';
// import { fetchSearch } from '../../actions/search_actions'


const mapStateToProps = (state) => {
  return {
    results: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchResults: (q => dispatch(fetchSearch(q)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);