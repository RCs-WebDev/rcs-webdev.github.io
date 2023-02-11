import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import './styles/style.css';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className='footer'>
      <div>
        <div className='copywright'>
          <h3>Designed by RC's WebDev</h3>
        </div>
        <div className='copywright'>
          <h3>Copyright © {year} RC's WebDev</h3>
        </div>
        <div className='body'>
          <ul className='icons'>
            <li>
              <a
                href='https://github.com/4-Leafs-Code'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Ronnie018'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
