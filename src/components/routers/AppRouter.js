import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import TodoDashboardPage from "../TodoDashboardPage";
import CreateTodoPage from "../CreateTodoPage";
import EditTodoPage from "../EditTodoPage";
import HelpTodoPage from "../HelpTodoPage";
import LoginPage from "../LoginPage";
import Header from "../Header";
import NotFoundPage from "../404";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={TodoDashboardPage} />
        <Route path="/create" component={CreateTodoPage} />
        <Route path="/edit/:id" component={EditTodoPage} />
        <Route path="/help" component={HelpTodoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
