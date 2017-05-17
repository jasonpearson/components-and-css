import React from 'react';
import { Route } from 'react-router-dom';

import {
  HomeContainer,
  CatsContainer,
  DogsContainer,
} from '../../containers';

const App = () => (
  <div>
    <Route path="/" component={HomeContainer} />
    <Route path="/cats" component={CatsContainer} />
    <Route path="/dogs" component={DogsContainer} />
  </div>
);

export { App };
