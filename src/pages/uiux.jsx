import React from 'react';
import './uiux.css'
import uiuximg from '../assets/uiux_image.png'


const Uxui = () => {
    return ( 
        <div className='uiux_div'>
            <img src={uiuximg} alt="" />
            <p>UI / UX Designers & Developers</p>
        </div>
     );
}
 
export default Uxui;