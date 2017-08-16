import React from 'react'
import { Route, IndexRoute } from 'react-router'
var App = require('./components/App')
var About = require('./components/About')
var Skills = require('./containers/Skills')
var Contact = require('./containers/Contact')
var Projects = require('./containers/Projects')

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="skills" component={Skills}/>
    <Route path="projects" component={Projects}/>
    <Route path="contact" component={Contact}/>
  </Route>
)