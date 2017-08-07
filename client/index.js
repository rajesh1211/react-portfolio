import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import routes from './routes';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers'

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>  
  , document.getElementById('app'));
