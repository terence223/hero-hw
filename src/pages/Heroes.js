import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import HeroProfile from '../components/HeroProfile';

function Heroes() {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={`${path}/:heroId`}>
                    <HeroProfile />
                </Route>
            </Switch>
        </div>
    );
}

export default Heroes;