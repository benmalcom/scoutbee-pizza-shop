import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import React from 'react';
import Header from '../Header';
import { PizzaItemProvider } from '../PizzaContext';
import routes from './routes';

export default () => {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Switch>
          <PizzaItemProvider>
            {routes.map((props, index) => (
              <Route key={index} {...props} />
            ))}</PizzaItemProvider>
          <Redirect to="/"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
