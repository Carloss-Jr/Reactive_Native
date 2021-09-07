import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PrivateRoutes from './privateroutes';

import Home from './views/Home';
import Courses from './views/Course';
import SingIn from './views/SignIn';
import SingUp from './views/SignUp';
import Dash from './views/Dash';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/signin" component={SingIn} />
        <Route path="/signup" component={SingUp} />
        <PrivateRoutes path="/dashboard" exact component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

