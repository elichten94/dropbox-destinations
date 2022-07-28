import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SplashContainer from './components/homepage_component/homepage_container'
import NavBarContainer from './components/homepage_component/nav_bar_container'


const App = () => {
  return (
    <>
      <header className='header'>
        <button id='explore-btn'>Add a recommendation</button>
        <div>DROPBOX DESTINATIONS!</div>
        <div className='signup-login-container'>
          <NavBarContainer/>
        </div >
      </header>
      <Switch>
        <Route exact path="/" component={props => <SplashContainer {...props} />} />
    </Switch>
    </>
  );
};

export default App;