import React from 'react';
import {render} from 'react-dom';
import {App} from './components';
import config from './config';

Object.keys(config.variables).forEach(varName => {
  document.documentElement.style.setProperty(`--${varName}`, config.variables[varName])
});

render(<App />, document.getElementById('app'));
