import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


function Redirector(path: string) {
  return () => { return (<Redirect to={path} />); }
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={Redirector('/home')} />
        <Route path='/home' render={Home} />
        <Route path='/login' render={Login} />
        <Route path='/signin' render={Signin} />
        <Route render={NotFound} />
      </Switch>
    </BrowserRouter >
  );
}

function Home() {
  return (
    <div>
      Home
    </div>
  );
}

function Login() {
  return (
    <div>
      Login
    </div>
  );
}

function Signin() {
  return (
    <div>
      Signin
    </div>
  );
}

function NotFound() {
  return (
    <div>
      Not Found
    </div>
  );
}
