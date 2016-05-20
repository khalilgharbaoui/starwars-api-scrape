import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import Welcome from './components/Welcome';
import PeopleList from  './components/PeopleList';
import PlanetsList from  './components/PlanetsList';
import Person from './components/Person';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route
        path='/person/:personId'
        component={Person} />
      <Route
        path='/planets/:pageId'
        component={PlanetsList} />
        <Route
          path='/people/:pageId'
          component={PeopleList} />
    </Route>
  </Router>
),
document.getElementById('root')
);
