import React from 'react'
import './sidebar.css'
import logo from './logo.jpg'
import {Link} from 'react-router-dom'

function myFunction() {
    var x = document.getElementById("start");
    var y = document.getElementById("switch");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.zindex = "-1";
    } else {
      x.style.display = "none";
      y.style.zindex = "1";
    }
  }
const sidebar = () => {
  return (
    <>
    <button id="switch" className='open' onClick={myFunction}>✓</button>
    <div id='start' className='start'>
        <button className='hover' onClick={myFunction}>X</button>
        <div className='editlogo'><img className='logo' src={logo} alt='logo'/></div>
        <div>
        <div className='Links'>
            <ul className='list'>
                <li className='w2e'><Link className='slink' to='/'>HOME</Link></li>
                <li className='w2e'><Link className='slink' to='/photo'>ABOUT US</Link></li>
                <li className='w2e'><Link className='slink' to='/'>OUR SERICES</Link></li>
                <li className='w2e'><Link className='slink' to='/contact'>CONTACT</Link></li>
                <li className='w2e'><Link className='slink' to='/'>HELP</Link></li>
            </ul>
        
        </div>
        </div>
    </div>
    </>
  )
}

export default sidebar