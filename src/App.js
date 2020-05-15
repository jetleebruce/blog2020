import React from "react";
import Navigation from "./components/navigation";
import PageRenderer from "./components/page-renderer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = {
    firstName: "Serge",
    lastName: "Modin",
  };
  return (
    <Router>
      <div className='App'>
        <Navigation user={user}/>
        <Switch>
          <Route path='/:page' component={PageRenderer} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
