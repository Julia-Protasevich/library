import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../header';
import {
    LibraryPage,
    LoginPage,
    UserBooksPage, 
    RegisterPage
} from '../pages';

import Routes from '../../routes';

import './app.css';

const App = () => {
    return (
      <main role="main" className="container">
        <Header />
        <Switch>
          <Route path={Routes.HOME} component={LibraryPage} exact/>
          <Route path={Routes.MY_BOOKS} component={UserBooksPage} />
          <Route path={Routes.LOGIN} component={LoginPage} />
          <Route path={Routes.REGISTER} component={RegisterPage} />

        </Switch>
      </main>
    )
  };
  
  export default App;