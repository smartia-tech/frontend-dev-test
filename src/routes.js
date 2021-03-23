import { HashRouter, Switch, Route } from "react-router-dom";
import * as P from "./pages";
// import * as C from "./components";

const Routes = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' component={P.HomePage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
