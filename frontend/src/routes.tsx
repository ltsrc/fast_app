import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './pages/signup';
import Signin from './pages/signin';
import TopBar from './topBar';
import RecoverPassword from './pages/recoverPassword';

export default function Routes() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>

        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>

        <Route path='/home' />

        <Route path='/signin' >
          <Signin />
        </Route>

        <Route path='/signup' >
          <Signup />
        </Route>

        <Route path='/recover-password' >
          <RecoverPassword />
        </Route>

        <Route render={NotFound} />
      </Switch>
    </BrowserRouter >
  );
}

function NotFound() {
  return (
    <div>
      Not Found
    </div>
  );
}
