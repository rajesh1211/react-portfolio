import React from 'react';
import { connect } from 'react-redux'

class Skills extends React.Component {

  renderList() {
    return this.props.skills.map((skill, index) => {
      return (
        <h2 key={index}> {skill} </h2>
      );
    });
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
    skills: state.skills
  };
}


export default connect(mapStateToProps, null)(Skills);