/**
 * 
 * 設定 react-router 的地方
 * 
 */

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Heroes from "./pages/Heroes";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Redirect to="/heroes" />
                </Route>
                <Route path="/heroes">
                    <Heroes />
                </Route>
            </Switch>
        </Router>
    );
}