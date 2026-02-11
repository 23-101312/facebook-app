import React from 'react';
import './personconfirm.css'
import Confirmbtn from './confirmbtn';
import guyconfirm from "../assets/guy.svg" 

const Personconfirm = () => {
    return (  
        <div className='confirmholder'>
            <div className='confirm_top'>
        <div className='personand'>
        <img src={guyconfirm} alt="" />
        Guy Hawkins
        </div>
        <p>4H</p>
            </div>
            <div className='confirm_bottom'>
            <Confirmbtn />
        <button className='btn1'>Delete</button>
            </div>
        </div>
    );
}
 
export default Personconfirm;