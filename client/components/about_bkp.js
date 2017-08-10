import React from 'react';
import rajesh_raikwar from '../images/rajesh_raikwar.jpg'
import mac from '../images/mac.png'

require('../styles/about.scss');

class About extends React.Component {
  render() {
    return(
      <div className="sub-container">
        <div className="row"> 
          <div className="col-md-10 col-md-offset-1 about-container">
            <div className="about-pic-container">
              <img src={mac} className='about-pic'/>
            </div>  
            <div className="about-me-container">
              <p className="heading"> Who am I? </p>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>           
          </div>
        </div>
      </div>
    );  
  }
}

export default About;