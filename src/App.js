import React from 'react';
import {  BrowserRouter as Router} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home,Browse,Signin,Signup }from './Pages/index';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';
import { UseAuthListener} from './hook';

export default function app() {
  const {user}=UseAuthListener();
  // console.log(user)

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        
      >
        <Signup />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        
      >
        <Signin />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE} >
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>
      {/* <Route exact path={ROUTES.HOME}>
        
      </Route> */}
    </Router>
  );
}


