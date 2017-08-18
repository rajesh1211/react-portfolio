import React from 'react';
import NavigationBar from './navigationbar'


require('../styles/app.scss');

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowNavBar: 'hide-nav-bar',
      menuIcon: 'fa-bars icon-bar',
      smallScreenHide: ''
    };

    this.navLinkClicked = this.navLinkClicked.bind(this)
  }

  toggleNavBar() {
    if (this.state.isShowNavBar == 'show-nav-bar') {
      this.setState({
       isShowNavBar: 'hide-nav-bar',
       menuIcon: 'fa-bars icon-bar',
       smallScreenHide: 'small-screen-hide'
      })
    }else {
      this.setState({ 
        isShowNavBar: 'show-nav-bar',
        menuIcon: 'fa-times icon-cross',
        smallScreenHide: ''
      })
    }    
  }

  toggleSmallScreenButton() {
    this.setState({ 
      isShowNavBar: 'show-nav-bar',
      menuIcon: 'fa-times icon-cross',
      smallScreenHide: ''
    })
  }

  navLinkClicked() {
    this.setState({smallScreenHide: 'small-screen-hide'})
  }
  
  render() {
    return(
      <div className={"container-fluid " + this.state.isShowNavBar + " " + this.state.smallScreenHide}>
        <div className="row">
          <NavigationBar navLinkClicked={this.navLinkClicked}/>
          <i className={"menu fa " + this.state.menuIcon} aria-hidden="true" onClick={() => this.toggleNavBar()}></i>
          <i className="menu-bar fa fa-bars icon-bar" aria-hidden="true" onClick={() => this.toggleSmallScreenButton()}></i>
          <div className="main-container">
            {this.props.children}
          </div>  
        </div>  
      </div>  
    );  
  }
}


module.exports = App;
