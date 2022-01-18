import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LogIn } from "../pages/Login";
import { Route } from "./Route";
import { SignUp } from "../pages/SignUp";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LogIn}></Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};
