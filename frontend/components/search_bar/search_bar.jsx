import React from 'react'
import Search from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';
import { FaTree, FaMapMarkerAlt } from 'react-icons/fa';

class SearchBar extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      query: '',
      displayResults: false,
      results: [],
      cursor: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShowResults = this.toggleShowResults.bind(this);
    this.topResult = this.topResult.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

  }

  toggleShowResults() {
    this.setState({ displayResults: !displayResults});
  }

  handleChange(e) {
    this.setState({query: e.target.value})
    this.handleSubmit(e)
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchResults(this.state.query)
      .then(action => this.setState({ results: action.payload.reverse()}))

  }

  showSearchResults(){

  }

  topResult(){
    let topResult = this.state.results[0]
    if (this.state.results.length > 0) {
      return topResult.park_name ? this.props.history.push(`/parks/${topResult.id}`) :
        this.props.history.push(`/trails/${topResult.id}`)
    }
  }

  handleKeyDown(e) {
    const { cursor, results } = this.state
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < results.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }))
    } else if (e.key === "Enter") {
        let i = this.state.cursor;
        results[i].trail_name ? this.props.history.push(`/trails/${this.state.results[i].id}`) :
        this.props.history.push(`/parks/${this.state.results[i].id}`)
    }
  }


  render(){
    return (
      <div className='search-container' onSubmit={this.handleSubmit} >
        <form className='search-form' onKeyDown={this.handleKeyDown}>

          <Search className='search-icon' />
          <input
            type='text'
            className='search-bar'
            onChange={this.handleChange}
            placeholder='Search by city, park, or trail name'
          />
          <FontAwesomeIcon type='submit' onClick={this.topResult} className='arrow-icon' icon={faArrowCircleRight} />

          <ul className='search-results-container'>
            {this.state.query.length < 1 ? "" :
            (this.state.results.map((result, i) => {
              return result.park_name ?
                <li className={this.state.cursor === i ? 'search-result-active' : 'search-result'} key={i}>
                  <Link to={`/parks/${result.id}`} className='result'>
                    <FaTree className='searching-icon' size={20} color={'#428A13'}/>
                    {result.park_name}
                    <div className='search-location'>{result.city}, {result.state}, {result.country}</div>
                </Link>
              </li> :
                <li className={this.state.cursor === i ? 'search-result-active' : 'search-result'} key={i}>
                  <Link to={`/trails/${result.id}`} className='result'>
                    <FaMapMarkerAlt className='searching-icon' size={20} color={'#428A13'} />
                    <div className='result'>{result.trail_name}</div>
                </Link>
              </li>
            }))
            }
          </ul>
        </form>
      </div>
    )
  }
}



export default withRouter(SearchBar)