import React from 'react';
import NavigationBar from './navigationbar'

require('../styles/general.scss');
require('../styles/app.scss');

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowNavBar: 'hide-nav-bar',
      menuIcon: 'fa-bars'
    };
  }

  toggleNavBar() {
    if (this.state.isShowNavBar == 'show-nav-bar')
      this.setState({
       isShowNavBar: 'hide-nav-bar',
       menuIcon: 'fa-bars'
      })
    else
      this.setState({ 
        isShowNavBar: 'show-nav-bar',
        menuIcon: 'fa-times'
      })
  }
  
  render() {
    return(
      <div className={"container-fluid " + this.state.isShowNavBar}>
        <div className="row">
          <NavigationBar toggleNavBar={this.toggleNavBar}/>
          <i className={"menu fa " + this.state.menuIcon} aria-hidden="true" onClick={() => this.toggleNavBar()}></i>
          <div className="main-container">
            {this.props.children}
          </div>  
        </div>  
      </div>  
    );  
  }
}


module.exports = App;
