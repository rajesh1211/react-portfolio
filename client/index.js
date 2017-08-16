import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers'


require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>  
  , document.getElementById('app'));
