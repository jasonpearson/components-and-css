/* eslint no-undef: 0 */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from './components/App';
import rootReducer from './reducers';

const history = createHistory();

const middleware = [
  routerMiddleware(history),
];

const store = createStore(
  rootReducer,
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

if (module.hot) {
  module.hot.accept();

  window.addEventListener('message', () => {
    if (process.env.NODE_ENV !== 'production') {
      console.clear();
    }
  });
}
