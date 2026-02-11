import React from 'react';
import facebookimg from "../assets/facebook.png" 
import './home.css'
import Navbtn from './navbtn';
import Confirmbtn from './confirmbtn';
import Watch from './watch';
import Title from './title';
import Uxui from './uiux';
import Picprofile from './pictureprofile';
import Middlemiddle from './middle';
import Post from './post';
import Personconfirm from './personcofirm';


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

<div className='container'>
        
        <aside className='left_side'>
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
        
        </aside>

        <main className='middle'>
            <section className='middle_top'>
                <Picprofile />
                <Picprofile />
                <Picprofile />
                <Picprofile />
            </section>

            <Middlemiddle />

            <section className='posts'>
            <Post />
            <Post />
            <Post />
            </section>
        </main>

        <aside className='rightside'>
            <Title />
            <section className='people'>
            <Personconfirm />
            <Personconfirm />
            </section>
            <Title />
            </aside>

        </div>
       
        </>
    );
}
 
export default Home;