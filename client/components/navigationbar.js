import React from 'react';
import { Link } from 'react-router';


class NavigationBar extends React.Component {
  render() {
    return(
      <div id="mySidenav" className="sidenav">
        <Link to="/"> About Me </Link>
        <Link to="skills"> Skills </Link>
        <Link to="projects"> projects </Link>
        <Link to="contact"> Contact Me </Link>
      </div>
    );  
  }
}

export default NavigationBar;