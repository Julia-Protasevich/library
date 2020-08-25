import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../header';

import Routes from '../../routes';

import './app.css';

const App = () => {
    return (
      <main role="main" className="container">
        <Header />
        <Switch>
          {
            Routes.map(route => {
              return (<Route path={route.path} component={route.component} exact/>)
            })
          }
          
        </Switch>
      </main>
    )
  };
  
  export default App;