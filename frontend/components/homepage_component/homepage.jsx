import React from 'react'
import SearchBarContainer from '../search_bar/search_bar_container.jsx'
import Sidebar from './sidebar.jsx'
// import './homepage.css'
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
      </div>
      <div className='results'>
        <div className='recs'> RECS </div>
        <div className='map'> MAP </div>
        <div className='sidebar'>
          <Sidebar people={['emily','brian','jamie', 'wenya', 'michelle']}/>
        </div>
      </div>
    </>
    )
  }
}

export default splashPage