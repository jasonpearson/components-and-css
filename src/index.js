import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  HomeContainer,
  CatsContainer,
  DogsContainer
} from './containers';

import config from './config';
import './index.css';

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

render(<AppContainer />, document.getElementById('app'));
