import React from 'react';
import {render} from 'react-dom';
import CatsContainer from './components/CatsContainer/index';
import config from './config';
import './index.css';

Object.keys(config.variables).forEach(varName => {
  document.documentElement.style.setProperty(`--${varName}`, config.variables[varName])
});

render(<CatsContainer />, document.getElementById('app'));
