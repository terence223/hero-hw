import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Heroes from "./pages/Heroes";


export default function App() {
  return (
      <Router>
          <Switch>
              <Route path="/heroes">
                  <Heroes />
              </Route>
          </Switch>
      </Router>
  );
}