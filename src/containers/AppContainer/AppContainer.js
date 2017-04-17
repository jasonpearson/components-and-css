import React, {Component} from 'react';
import {
  CatsContainer,
  DogsContainer
} from '../index';

class AppContainer extends Component {
  render () {
    return (
      <div>
        <CatsContainer />
        <DogsContainer />
      </div>
    );
  }
}

export default AppContainer;
