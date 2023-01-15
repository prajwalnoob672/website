import React from 'react'
import './home.css'
import f from './f.png'
import i from './i.png'
import g from './g.png'

function myFinc(){
  var x=document.getElementById("info")
  if (x.style.display === "none") {
    x.style.display = "block";
   
  } else {
    x.style.display = "none";
  
  }
}
function myFun2(){
  var x=document.getElementById("info")
  x.style.display="none"
}
const home = () => {

  return (
    <div className='background'>
      <div className='contact'>
        <div className='logo1'><a href="https://mail.google.com/mail/u/3/?hl=en&tf=cm&fs=1&to=officiallyitsme4735@gmail.com"  rel="noreferrer" target="_blank"><img src={g} alt="gmail"/></a></div>
        <div className='logo1'><a href="https://www.instagram.com/p4rajwal_agn/"  rel="noreferrer" target="_blank"><img src={i} alt="instagram"/></a></div>
        <div className='logo1'><a href="https://www.facebook.com/prajwal.neupane123"  rel="noreferrer" target="_blank"><img src={f} alt="facebook"/></a></div>
      </div>
    <div className='firsthead'>Hello Guys, Its Me <div onMouseEnter={myFinc} onMouseLeave={myFun2} className='noobeffect'>NOOB.</div> </div>
   <div className='second'>This is the website designed by Me.</div>
    <div id='info' className='info'>
      <div>Name: Prajwal Neupane</div>
      <div>Age: 19</div>
      <div>I am studying Computer Engineering at Paschimanchhal Campus Lamchhaur , Pokhara IOE Tribhuvan University . Right Now, I am in first year second part.</div>
      {/* <div>Schooling : SunRise English School   The Best Part of the life where I met lots of my noob fellows.</div>
      <div>I can mention their name But wanna confuse you guys, yes you. Are you that much noob for me or not??</div>
      <div>Hope one day - This website might got the proper design / responsive too.</div>
      <div>Till then, Mission is On......</div> */}
    </div>
    </div>
  )
}

export default home