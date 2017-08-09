import React from 'react';
import rajesh_raikwar from '../images/rajesh_raikwar.jpg'

class ProfileBar extends React.Component {
  render() {
    return(
      <div>
        <div className="profile-container">
          <div className="profile-pic-container"> 
            <img src={rajesh_raikwar} className='profile-pic'/>
          </div>  
          <div className="profile-name"> Rajesh Raikwar </div>
        </div>
      </div>
    );  
  }
}

export default ProfileBar;