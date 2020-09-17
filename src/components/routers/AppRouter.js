import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import TodoDashboardPage from "../TodoDashboardPage";
import CreateTodoPage from "../CreateTodoPage";
import EditTodoPage from "../EditTodoPage";
import HelpTodoPage from "../HelpTodoPage";
import LoginPage from "../LoginPage";
import NotFoundPage from "../404";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={TodoDashboardPage} />
        <PrivateRoute path="/create" component={CreateTodoPage} />
        <PrivateRoute path="/edit/:id" component={EditTodoPage} />
        <PrivateRoute path="/help" component={HelpTodoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
