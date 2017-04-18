import React from 'react';
import {render} from 'react-dom';
import AppContainer from './containers';
import config from './config';

// Object.keys(config.variables).forEach(varName => {
//   document.documentElement.style.setProperty(`--${varName}`, config.variables[varName])
// });

render(<AppContainer />, document.getElementById('app'));
