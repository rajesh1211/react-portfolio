import React from 'react'
import { Route, IndexRoute } from 'react-router'
var App = require('./components/app')
var About = require('./components/about')
var Skills = require('./containers/skills')
var Contact = require('./containers/contact')
var Projects = require('./containers/projects')

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="skills" component={Skills}/>
    <Route path="projects" component={Projects}/>
    <Route path="contact" component={Contact}/>
  </Route>
)