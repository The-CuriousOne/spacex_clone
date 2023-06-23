import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

 
const Header = () => {

  const [menuTab, setMenuTabStatus] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollPos, setscrollPos] = useState(0);

  useEffect(() => {
    const handleScrolls = () =>{
      const currentScrollPos = window.scrollY;
      const visible = scrollPos > currentScrollPos;
      setscrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll',handleScrolls);
    return () => {
      window.removeEventListener('scroll',handleScrolls);
    }
  },[scrollPos]);

  

  const menuTabStyle = {
    transform: visible && menuTab?'translateX(0)':'translateX(100%)',
    transition: 'transform 0.5s'
  };


  return (
    <div className={`Header ${visible? 'visivle': 'hidden'}`}>
      <div className="logo">
        <a href="/">
          <img src="/images/logo.png" alt="" />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li><a href="/falcon_9">Falcon 9</a></li>
          <li><a href="/falcon_heavy">Falcon Heavy</a></li>
          <li><a href="/dragon">Dragon</a></li>
          <li><a href="/starship">Starship</a></li>
          <li><a href="/human_space_flight">Human Spaceflight</a></li>
          <li><a href="/rideshare">Rideshare</a></li>
          <li><a href="/starshield">Starshield</a></li>
          <li><a href="/starlink">StarLink</a></li>
        </ul>
      </div>
      <div className="rightMenu">
        <div className="shop">
          <ul>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
        <div className="menuButton">
          <MenuIcon className='customMenuIcon' onClick={()=>setMenuTabStatus(true)}/>
        </div>
      </div>
      <div className="menuTab" style={menuTabStyle}>
        <ul>
          <li><a href="#"><CloseIcon className='customCloseIcon' onClick={()=>setMenuTabStatus(false)}/></a></li>
          <li><a href="#">Mission </a></li>
          <li><a href="#">Launches </a></li>
          <li><a href="#">Careers </a></li>
          <li><a href="#">Updates </a></li>
          <li><a href="#">Shop </a></li>
        </ul>
      </div>
      <div className="smallMenuTab" style={menuTabStyle}>
        <ul>
          <li><a href="#"><CloseIcon className='customCloseIcon' onClick={()=>setMenuTabStatus(false)}/></a></li>
          <li><a href="#">Falcon 9</a></li>
          <li><a href="#">Falcon Heavy</a></li>
          <li><a href="#">Dragon</a></li>
          <li><a href="#">Starship</a></li>
          <li><a href="#">Human Spaceflight</a></li>
          <li><a href="#">Rideshare</a></li>
          <li><a href="#">Starshield</a></li>
          <li><a href="#">StarLink</a></li>
          <li><a href="#">Mission </a></li>
          <li><a href="#">Launches </a></li>
          <li><a href="#">Careers </a></li>
          <li><a href="#">Updates </a></li>
          <li><a href="#">Shop </a></li>
        </ul>
      </div>
      {menuTab && <div className="BlurEffect" />}
    </div>
    
  )
}

export default Header
