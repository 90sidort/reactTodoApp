import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoDashboardPage from '../TodoDashboardPage'
import CreateTodoPage from '../CreateTodoPage'
import EditTodoPage from '../EditTodoPage'
import HelpTodoPage from '../HelpTodoPage'
import Header from '../Header'
import NotFoundPage from '../404'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={TodoDashboardPage} exact={true} />
                <Route path="/create" component={CreateTodoPage} />
                <Route path="/edit/:id" component={EditTodoPage} />
                <Route path="/help" component={HelpTodoPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter