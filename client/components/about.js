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

    this.initTypewriter()
  }

  initTypewriter() {
    setTimeout( function() {
      var salutationClass = document.getElementsByClassName('salutation')[0]
      salutationClass.classList.add("remove-type-writer");
      var houseNameClass = document.getElementsByClassName('house-name')[0]
      houseNameClass.classList.add("typewriter");

      setTimeout( function() {
        houseNameClass.classList.add("remove-type-writer");
        var description = document.getElementsByClassName('description')[0]
        description.classList.add("typewriter");        

        setTimeout( function() {
          description.classList.add("remove-type-writer");
          var descriptionEnd = document.getElementsByClassName('description-end')[0]
          descriptionEnd.classList.add("typewriter");
        }, 3500);  
      }, 3500);
    }, 3500);
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
              <div className="typewriter-div">
                <p className="typewriter salutation"> Hi!!, I am Rajesh.</p>
              </div> 
              <br/> 
              <div className="typewriter-div">
                <p className="house-name">... from house Stark! </p>
              </div>  

              <div className="sub-intro">
                <div className="typewriter-div">
                  <p className="description"> A Full Stack Developer by heart,  </p>
                </div>
                <br/>
                <div className="typewriter-div">  
                  <p className="description-end"> which by the way is made of Valerian Steel. </p>
                </div>  
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