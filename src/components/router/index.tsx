import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import routes from './routes';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((props, index) => (
          <Route key={index} {...props} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
