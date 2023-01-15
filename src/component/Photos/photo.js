import React from 'react'
import './photo.css'

import f from '../Home/f.png'
import i from '../Home/i.png'
import g from '../Home/g.png'

import p2 from './2.jpg'
import p3 from './3.jpg'
import p4 from './4.jpg'
import p5 from './5.jpg'
import p6 from './6.jpg'
import p1 from './1.png'
import p7 from './7.jpg'
 
const photo = () => {
  return (
    <div className="stage">
      <div className='contact1'>
        <div className='logo1'><a href="https://mail.google.com/mail/u/3/?hl=en&tf=cm&fs=1&to=officiallyitsme4735@gmail.com"  rel="noreferrer" target="_blank"><img src={g} alt="gmail"/></a></div>
        <div className='logo1'><a href="https://www.instagram.com/p4rajwal_agn/"  rel="noreferrer" target="_blank"><img src={i} alt="instagram"/></a></div>
        <div className='logo1'><a href="https://www.facebook.com/prajwal.neupane123"  rel="noreferrer" target="_blank"><img src={f} alt="facebook"/></a></div>
      </div>
  

    <div className="container">
      <div className="ring">
        <div className="img1"><img src={p1} alt="photo0"/></div>
        <div className="img1"><img src={p2} alt="photo1"/></div>
        <div className="img1"><img src={p3} alt="photo2"/></div>
        <div className="img1"><img src={p4} alt="photo3"/></div>
        <div className="img1"><img src={p5} alt="photo4"/></div>
        <div className="img1"><img src={p6} alt="photo5"/></div>
        <div className="img1"><img src={p7} alt="photo6"/></div>
      </div>
    </div>
    
    </div>
  )
}

export default photo