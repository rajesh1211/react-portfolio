import React from 'react';
import rajesh_raikwar from '../images/rajesh_raikwar.jpg'
import mac from '../images/mac.png'
import darth from '../images/darth.png'
import storm_trooper from '../images/stormtrooper2.png'
import console from '../images/console.png'
import mobile from '../images/mobile1.png'
import stark from '../images/stark.png'


require('../styles/about.scss');

class About extends React.Component {
  render() {
    return(
      <div className="sub-container">
        <div className="row"> 
          <div className="col-md-12 about-container">
            <div className="intro">
              <p className="salutation"> Hi!! , I am Rajesh </p>
              <p className="house-name">  ... from house Stark! </p>
            </div>  
            <img src={mac} className='img-mac about-images'/>
            <img src={darth} className='img-darth about-images'/>
            <img src={console} className='img-console about-images'/>
            <img src={stark} className='img-stark about-images'/>
            
          </div>
        </div>
      </div>
    );  
  }
}

export default About;