import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../header';
import {
    LibraryPage,
    LoginPage,
    UserBooksPage, 
    RegisterPage
} from '../pages';

import './app.css';

const App = () => {
    return (
      <main role="main" className="container">
        <Header />
        <Switch>
          <Route path="/" component={LibraryPage} exact/>
          <Route path="/mybooks" component={UserBooksPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />

        </Switch>
      </main>
    )
  };
  
  export default App;