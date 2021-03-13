import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import LandingComponent from './Landing';
import LaunchesComponent from './Launches';


function Routes() {

  return (
        <Switch>
          <Route path={routes.LANDING} component={LandingComponent} exact />
          <Route path={routes.LAUNCHES} component={LaunchesComponent} exact />
        </Switch>
  )
}

export default Routes;