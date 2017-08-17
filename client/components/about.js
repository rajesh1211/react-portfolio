import React from 'react';
import rajesh_raikwar from '../images/rajesh_raikwar.jpg'
import mac from '../images/mac.png'
import darth from '../images/darth.png'
import console from '../images/console.png'
import stark from '../images/stark.png'

require('../styles/contact.scss');

class About extends React.Component {
  render() {
    return(
      <div className="about-container">
        <div className="row"> 
          <div className="col-md-12 about-inner-container">
            
            <div className="intro">
              <p className="typewriter salutation"> Hi!!, I am Rajesh.</p>
              <p className="house-name">... from house Stark! &nbsp; </p>

              <div className="sub-intro">
                <p className="description"> A Full Stack Developer by heart,  </p>
                <p className="description"> which by the way is made of Valerian Steel. </p>
              </div>  
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

module.exports = About;