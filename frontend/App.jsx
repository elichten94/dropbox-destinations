import React from 'react';
import { Button } from '@mui/material';
import { Route, Switch, Link } from 'react-router-dom';
import SplashContainer from './components/homepage_component/homepage_container.jsx'
import NavBarContainer from './components/homepage_component/nav_bar_container.jsx'

const App = () => {
  return (
    <>
      <header className='header'>
        <button className='add-rec-button' >
          ADD A RECOMMENDATION
        </button>
        <div className="logo"> DROPBOX DESTINATIONS</div>
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