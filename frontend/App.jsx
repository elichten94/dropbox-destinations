import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SplashContainer from './components/homepage_component/homepage_container.jsx'
import NavBarContainer from './components/homepage_component/nav_bar_container.jsx'
import RecModal from './components/recModal/recModal'
import ReviewModal from './components/reviewModal/reviewModal'


const App = () => {

  const [recModalActive, setRecModalActive] = useState(false)
  const [userData, setUserData] = useState({})

  const fetchData = () => {
    fetch('http://localhost:3000/api/recommendations/1', {
      method: 'get'
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setUserData(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <header className='header'>
        <button onClick={() => setRecModalActive(true)} id='explore-btn'>Add a recommendation</button>
        <div>DROPBOX DESTINATIONS!</div>
        <div className='signup-login-container'>
          <NavBarContainer/>
        </div >
      </header>
      <ReviewModal setRecModalActive={setRecModalActive} recModalActive={recModalActive}/>
      <Switch>
        <Route exact path="/" component={props => <SplashContainer {...props} />} />
    </Switch>
    </>
  );
};

export default App;