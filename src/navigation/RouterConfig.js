import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ROOT, HOME, NOTFOUND
} from 'navigation/CONSTANTS';
import { NotFound } from 'navigation/NotFound';
import Launches from 'pages/Launches';

export const RouterConfig = () => (
  <div>
    <CssBaseline />
    <Switch>
      <Route exact path={ROOT} component={Launches} />
      <Route exact path={HOME} component={Launches} />
      <Route path={NOTFOUND}>
        <NotFound />
      </Route>
    </Switch>
  </div>
);

export default RouterConfig;
