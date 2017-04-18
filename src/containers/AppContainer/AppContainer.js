import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  HomeContainer,
  CatsContainer,
  DogsContainer
} from '../index';

import './AppContainer.css';

class AppContainer extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path="/" component={HomeContainer} />
          <Route path="/cats" component={CatsContainer} />
          <Route path="/dogs" component={DogsContainer} />
        </div>
      </Router>
    );
  }
}

export default AppContainer;
