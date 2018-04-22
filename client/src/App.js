import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// import Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Programs from './pages/Programs';
import Schedules from './pages/Schedules';
import NoMatch from './pages/NoMatch';

// Import Routes and Define them after Switch Component
const history = createBrowserHistory();

const App = () => {
  return(
      <div className="container">
          <Router history={history}>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/team" component={Team}/>
                  <Route exact path="/programs" component={Programs}/>
                  <Route exact path="/schedules" component={Schedules}/>
                  <Route path="*" component={NoMatch} />
              </Switch>
          </Router>
      </div>

  )
};

export default App;
