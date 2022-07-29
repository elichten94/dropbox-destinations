import React from 'react'
import SearchBarContainer from '../search_bar/search_bar_container.jsx'
import Sidebar from './sidebar.jsx'
import HomePageRecs from '../recommendations/HomePageRecs.jsx'


class splashPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <>
      <div className='splash'>
        {/* <img id='beach-image' src='https://splash-page.s3.us-east-2.amazonaws.com/IMG_5994.jpeg' /> */}
        {/* <div className='home-container'> */}
          {/* <h1 className='welcomeMessage'>Are you ready for an adventure?</h1> */}
          <SearchBarContainer/>
        <div className='results'>
          <div className='recs'>
            <div className='section-title'> RECOMMENDATIONS</div>
            {['cafe1', 'cafe2', 'cafe3'].map((rec)=><HomePageRecs rec={rec}/>)} </div>
          <div className='homepage-map'>
            <div className='section-title'> MAP </div>
          </div>
          <div className='sidebar'>
            <Sidebar people={['Emily','Brian','Jamie', 'Wenya', 'Michelle']}/>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default splashPage