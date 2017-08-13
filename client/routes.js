import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/About'
import Skills from './containers/Skills'
import Contact from './containers/Contact'
import Projects from './containers/Projects'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="skills" component={Skills}/>
    <Route path="projects" component={Projects}/>
    <Route path="contact" component={Contact}/>
  </Route>
)