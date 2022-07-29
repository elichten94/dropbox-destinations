import React from 'react'
import SearchBarContainer from '../search_bar/search_bar_container.jsx'
import Sidebar from './sidebar.jsx'
// import './homepage.css'
class splashPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestReviews();

  }

  render() {
    if (!this.props.reviews) {
      return '...loading'
    }

    return(
      <>
      <div className='splash'>
        {/* <img id='beach-image' src='https://splash-page.s3.us-east-2.amazonaws.com/IMG_5994.jpeg' /> */}
        {/* <div className='home-container'> */}
          {/* <h1 className='welcomeMessage'>Are you ready for an adventure?</h1> */}
          <SearchBarContainer/>
        <div className='results'>
          <div className='recs'> RECS 
          <div>
            {/* {this.props.reviews} */}
          <ul>
          {
            this.props.reviews.map((review, i) => {
              return <div key = {i}>{review.title}</div>
            })
          }
        </ul>
          </div>
          </div>
          <div className='map'> MAP </div>
          <div className='sidebar'>
            <Sidebar people={['emily','brian','jamie', 'wenya', 'michelle']}/>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default splashPage