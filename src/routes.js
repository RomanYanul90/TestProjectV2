import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import MainReserv from './components/MainReserv/MainReserv';

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
    // eslint-disable-next-line
      <Switch>
        <Route path="/" exact>
          <MainReserv />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};
