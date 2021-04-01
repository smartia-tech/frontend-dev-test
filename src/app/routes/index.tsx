import { Switch, Route } from "react-router-dom";

import RoutesContainer from "app/components/RoutesContainer";

import { routes } from "./routes";

export default function Routes() {
  return (
    <RoutesContainer>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </RoutesContainer>
  );
}
