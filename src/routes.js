import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
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
