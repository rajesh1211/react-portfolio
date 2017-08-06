import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/About'
import Skills from './components/Skills'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="skills" component={Skills}/>
  </Route>
)