import React from 'react';
import './twitch.css';
import Twitch from '../assets/twitch.png';

const Twitchcomponent = () => {
  return ( 
    <div className="twitch">
      <img src={Twitch} alt=""/>
      <div className='twitchtext'>
        <h1>Twitch apologises as streamers</h1>
        <p className='ptwitch'>Twitch has apologised, after a backlash over new,
advertising rules.</p>
        <span className='twitchspan'>See more</span>
      </div>
    </div>
   );
}
 
export default Twitchcomponent;