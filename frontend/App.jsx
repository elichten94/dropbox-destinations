import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SplashContainer from './components/homepage_component/homepage_container';


const App = () => {
  return (
    <>
    <div>
      <header>

      </header>
        DROPBOX DESTINATION!!!!!
      <Switch>
        <Route exact path="/" component={props => <SplashContainer {...props} />} />
    </Switch>
    </div>
    </>
  );
};

export default App;