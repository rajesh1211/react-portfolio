import React from 'react';
import { connect } from 'react-redux'

class Projects extends React.Component {
  renderList() {
    return this.props.projects.map((project, index) => {
      return (
        <h2 key={index}>{project}</h2>    
      )
    })
  }

  render() {
    return(
      <div>
        {this.renderList()}
      </div>
    );  
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}


export default connect(mapStateToProps, null)(Projects);