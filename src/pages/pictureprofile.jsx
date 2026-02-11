import React from 'react';
import './pictureprofile.css'
import picprofile from "../assets/profile.svg"
import scene from "../assets/scene.png"

const Picprofile = () => {
    return (
        <div className='picp'>
            <img src={scene} alt="" />
            <div className='profilebottom'>
            <img src={picprofile} alt="" />
            <p className='ppic'>Islam Ali</p>
            </div>
        </div>
      );
}
 
export default Picprofile;