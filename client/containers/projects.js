import React from 'react';
import { connect } from 'react-redux'

require('../styles/projects.scss');

class Projects extends React.Component {

  renderList() {
    return this.props.projects.map((project, index) => {
      return (
        <li className="card" key={project.id}>
          <span className="fa fa-thumb-tack icon-pin"></span>
          <div>  
            <p> Name: {project.name} </p>
            <p> Role: {project.role} </p>
            <p> Techs: {project.techs} </p>
            <p> Description: {project.description}</p>
          </div>
        </li>
      )
    })
  }

  render() {
    return(
      <div className="projects-container">
        <ul className="projects-cards" >
          {this.renderList()}
        </ul>
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