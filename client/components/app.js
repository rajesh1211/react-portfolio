import React from 'react';
import NavigationBar from './NavigationBar'

require('../styles/app.scss');

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <NavigationBar/>
        <div className="main-container">
          {this.props.children}
        </div>  
      </div>  
    );  
  }
}

export default App;