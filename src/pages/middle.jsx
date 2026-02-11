import React from 'react';
import './middle.css'
import guy2 from "../assets/guy2.png" 
import video from "../assets/video.svg" 
import image from "../assets/image.svg" 
import happy from "../assets/happy.svg" 


const Middlemiddle = () => {
    return ( 
        <div className='middlemiddle'>
            <div className='middletop'>
                <img src={guy2} alt="" />
                <div className='input'>What’s on your mind, Jenny</div>
            </div>
            <div className='middlebottom'>
                <div className='iconname'>
                <img src={video} alt="" />
                Live Video
                </div>
                <div className='iconname'>
                <img src={image} alt="" />
                Photo/video
                </div>
                <div className='iconname'>
                <img src={happy} alt="" />
                Feeling/activity
                </div>
            </div>
        </div>
     );
}
 
export default Middlemiddle;