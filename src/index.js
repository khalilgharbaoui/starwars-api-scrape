import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import PeapolList from  './components/PeapolList';
import PlanetsList from  './components/PlanetsList';
import Person from './components/Person';
import Resident from './components/Resident';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PeapolList} />
      <Route
        path='/person/:personId'
        component={Person} />
      <Route
        path='/planets'
        component={PlanetsList} />
    </Route>
  </Router>
),
document.getElementById('root')
);
