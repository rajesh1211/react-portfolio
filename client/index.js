import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import {history} from 'react-router/lib/BrowserHistory';
// import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes';

render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
