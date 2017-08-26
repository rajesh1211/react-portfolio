import React from 'react';
import rajesh_raikwar from '../images/rajesh_raikwar.jpg'
import mac from '../images/mac.png'
import darth from '../images/darth.png'
import console from '../images/console.png'
import stark from '../images/stark.png'
import logo from '../images/mylogo.png'

require('../styles/about.scss');

class About extends React.Component {
   constructor(props) {
    super(props)
    this.randomizeIcons = this.randomizeIcons.bind(this)
  }
  randomizeIcons(e) {
    var clickedElementPosClass = e.target.className.match(/img-pos-[0-9]/g)[0]; 
    var index = parseInt(clickedElementPosClass[clickedElementPosClass.length -1])
    var clickedElementClass = e.target.className.match(/img-[0-9]/g)[0]
    var arr = [0,1,2,3]
    while("img-"+arr[index] == clickedElementClass) {
      arr = arr.sort(function() {
        return .5 - Math.random();
      });  
    }

    var images = document.getElementsByClassName("about-images");
    for (var i = 0; i< images.length; i++) {
      var className = images[i].className.match(/img-[0-9]/g);
      if (className) {
        className = className[0];
        images[i].classList.remove(className);
        images[i].classList.add("img-"+arr[i]);  
      }
    }
  }

  render() {
    return(
      <div className="about-container">
        <div className="row"> 
          <div className="col-md-12 about-inner-container inner-container">
            
            <div className="intro">
              <p className="typewriter salutation"> Hi!!, I am Rajesh.</p>
              <p className="house-name">... from house Stark! &nbsp; </p>

              <div className="sub-intro">
                <p className="description"> A Full Stack Developer by heart,  </p>
                <p className="description"> which by the way is made of Valerian Steel. </p>
              </div>  
            </div> 
            
            <img src={stark} className='img-0 img-pos-0 about-images' onClick={this.randomizeIcons}/>
            <img src={darth} className='img-1 img-pos-1 about-images' onClick={this.randomizeIcons}/>
            <img src={console} className='img-2 img-pos-2 about-images' onClick={this.randomizeIcons}/>
            <img src={mac} className='img-3 img-pos-3 about-images' onClick={this.randomizeIcons}/>
            
            

          </div>
        </div>
      </div>
    );  
  }
}

module.exports = About;