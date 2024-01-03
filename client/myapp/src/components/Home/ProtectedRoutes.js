import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../Authentication/Login';
import Homepage from './Homepage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
            <Route {...props} element={<Homepage />} />
        ) : (
          <Login />
        )
      }
    />
  );
};

export default ProtectedRoute;
