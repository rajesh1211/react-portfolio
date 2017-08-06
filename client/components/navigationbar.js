import React from 'react';
import { Link } from 'react-router';


class NavigationBar extends React.Component {
  render() {
    return(
      <div id="mySidenav" className="sidenav">
        <Link to="/"> About Me </Link>
        <Link to="skills"> Skills </Link>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
      </div>
    );  
  }
}

export default NavigationBar;