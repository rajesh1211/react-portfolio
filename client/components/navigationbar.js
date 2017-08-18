import React from 'react';
import { Link, browserHistory } from 'react-router';
import ProfileBar from './profile_bar'

require('../styles/navigation.scss');
class NavigationBar extends React.Component {

  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)

  }

  navigate(e) {
    this.props.navLinkClicked()
    browserHistory.push(e.target.getAttribute("data"))
  }

  render() {
    return(
      <div className="nav-container">
        <nav id="mySidenav" className="sidenav" >
          <ProfileBar/>
          <div className="sidenav-list">
            <a className="sidenav-list-item" data="/" onClick={this.navigate}>
              <span className="nav-icon icon-about glyphicon glyphicon-user"></span>
              About me
            </a>
            <a className="sidenav-list-item" data="/skills" onClick={this.navigate}>
              <span className="nav-icon icon-about glyphicon glyphicon-tasks"></span>
              Skills
            </a>
            <a className="sidenav-list-item" data="/projects" onClick={this.navigate}>
              <span className="nav-icon icon-about glyphicon glyphicon-folder-open"></span>
              Projects
            </a>
            <a className="sidenav-list-item" data="/contact" onClick={this.navigate}>
              <span className="nav-icon icon-about glyphicon glyphicon-send"></span>
              Contact me
            </a>
          </div>
        </nav>
      </div>  
    );  
  }
}

export default NavigationBar;