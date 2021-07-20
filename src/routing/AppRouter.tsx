import React from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route exact path='/home'><Home /></Route>
            </Switch>
        </Router>
    )
};

export default AppRouter;