import { Route, Switch } from "react-router-dom";
import { LogIn } from "../pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LogIn}></Route>
    </Switch>
  );
};
