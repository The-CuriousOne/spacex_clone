import React from 'react'
import './Footer.css'
 
const Footer = () => {
  return (
    <>
    <div className='Footer'>
      <ul>
        <li><a href="#" style={{fontWeight: 'lighter'}}>spaceX &copy; 2023</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Youtube</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Flickr</a></li>
        <li><a href="#">Linkedin</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Suppliers</a></li>
      </ul>
    </div>
    <div className="Footer2Wrap">
      <div className="Footer2">
        <ul>
          <li><a href="#" style={{fontWeight: 'lighter'}}>spaceX &copy; 2023</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Youtube</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
        <ul>
          <li><a href="#">Flickr</a></li>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Suppliers</a></li>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Footer
