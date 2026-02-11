import React from 'react';
import facebookimg from "../assets/facebook.png" 
import './home.css'
import Navbtn from './navbtn';
import Confirmbtn from './confirmbtn';
import Watch from './watch';
import Title from './title';
import Uxui from './uiux';


const Home = () => {
    return (  
        <>
        <header>
            <img src={facebookimg} alt="" />
            <nav>
            <Navbtn />
            <Navbtn />
            <Navbtn />
            <Navbtn />
            </nav>
        </header>

<main>
        
        <section className='left_side'>
        <Confirmbtn />
        <div className='watch_coloumn'>
        <Watch />
        <Watch />
        <Watch />
        <Watch />
        </div>

        <div className='uiux_coloumn'>
        <Title />
        <Uxui />
        <Uxui />
        <Uxui />
        <Uxui />
        <Uxui />
        <Uxui />

        </div>
        
        </section>

        </main>
       
        </>
    );
}
 
export default Home;