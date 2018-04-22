import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// import Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';

// Import Routes
const history = createBrowserHistory();

const App = () => {
  return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/team" component={Team}/>
        </Switch>
      </Router>
  )
};

export default App;
