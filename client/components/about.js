import React from 'react';
import rajesh_raikwar from '../images/rajesh_raikwar.jpg'

require('../styles/about.scss');

class About extends React.Component {
  render() {
    return(
      <div className="sub-container">
        <div className="row"> 
          <div className="col-md-6">
            <img src={rajesh_raikwar} className='about-pic'/>
          </div>
          <div className="col-md-6">
            <div className="about-me">
              <p className="heading"> Who am I? </p>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>           
          </div>
        </div>
      </div>
    );  
  }
}

export default About;