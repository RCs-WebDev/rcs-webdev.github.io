import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburguer from '../../Icons/Hamburguer';
import './styles/style.css';

function NavBar({ topics = ['topic1', 'topic2', 'topic3'] }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <div className='nav-container'>
      <div className='logo'>icon here</div>
      <div className='content'>
        <Hamburguer
          expand={expand}
          updateExpanded={updateExpanded}
        />
        <nav className='nav'>
          <ul className='items'>
            {topics.map((topic, i) => {
              return (
                <li className='item' key={i}>
                  <Link to='#'>{topic}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
