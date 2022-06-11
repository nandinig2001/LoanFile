import React from 'react';
import { Button } from './Button';
import './Home.css'

function Home() {
  return (
    <div className='hero-container'>
      <img src='' />
      <h1>SKILLS ROOT</h1>
      <p>Skills Root is a leading vocational education company that provides managed training services including custom content development and curriculum design, learning administration, learning delivery, strategic sourcing, and learning technology.</p>
      <div className='hero-btns'>
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >Register/Login</Button>
        
      </div>
    </div>
  );
}

export default Home;