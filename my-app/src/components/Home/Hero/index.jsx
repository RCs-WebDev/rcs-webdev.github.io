import React from 'react';
import heroLogo from './RCIcon.png';
import './style.css';

function Hero() {
  return (
    <section>
      <div className='hero' id='hero'>
        <div className='content'>
          <div>
            <div className='header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='name'>
                Welcome to
                <strong className='main-name'> RC's WebDev</strong>,
              </h1>
            </div>

            <div className='logo'>
              <img src='./RCIcon.png' alt='hero pic' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
