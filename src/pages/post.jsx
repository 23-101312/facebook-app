import React from 'react';
import './post.css'
import scene from "../assets/scene.png" 
import post from "../assets/post.png" 
import globe from "../assets/globe.svg" 

const Post  = () => {
    return (  
        <div className='postwhole'>
            <div className='posttopwhole'>
                <div className='posttop'>
                <img src={post} alt="" />
            <div className='postuser'>
                <p>Albert Flores</p>
                <div className='time'>
                    2d <span className='dot'>.</span>
                <img src={globe} alt="" />
                </div>
            </div>
            </div>
            <p className='dots'>...</p>
            </div>
            
            <img className='scene' src={scene} alt="" />
        </div>

    );
}
 
export default Post;