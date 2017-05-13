/* eslint no-undef: 0 */
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from './containers';
import rootReducer from './reducers/reducer';

// let document;
// let window;
const history = createHistory();

const middleware = [
  routerMiddleware(history),
];

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer,
  }),
  window.__preloaded_state__,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
