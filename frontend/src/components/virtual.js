import React from 'react'
import { Link } from 'react-router-dom'
import shr from '../Assets/shr.jpg'
import tirg from '../Assets/tirg.jpg'
import pan from '../Assets/pan.jpg' 
import vvit from '../Assets/vvit.jpg' 



export default function Virtual() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to="/userDetails" class="nav-link">
            <li class="nav-item active">
             Home 
            </li>
            </Link>
            <Link to="/about" class="nav-link">
            <li class="nav-item active">
             About Us
            </li>
            </Link>
            <Link to="/gallery" class="nav-link">
            <li class="nav-item active">
             Gallery
            </li>
            </Link>
            <Link to="/map" class="nav-link">
            <li class="nav-item active">
             Map
            </li>
            </Link>
          
          </ul>
          <ul class="nav navbar-nav navbar-right" id="right">
            <li>Park</li>

          </ul>
        </div>
      </nav>
      <div id="dd">
      <img src={vvit} alt="" width="100%" height="100%"/>
      </div>
      <Link to="/shar">
  <div id="one" >
  <img src={shr} alt="" width="270" height="400" />
  <div id='tx'>Shark</div>
  </div>
  </Link>
  <Link to="/tgr">
  <div id='tw'>
  <img src={tirg} alt="" width="270" height="400" />
  <div id='tx'>Tiger</div>
  </div>
  </Link>
  <Link to="/pan">
  <div id='thr'>
  <img src={pan} alt="" width="270" height="400" />
  <div id='tx'>Panda</div>
  </div>
  </Link>
      <div class="announcements">
    <span class="ticker">Announcements</span>
    <marquee class="news-content">
        <p>&#x270C;Zoo Timings : 10.00 A.M To 5.00 P.M .   </p><p>&#x270C;You can Book tickets in online.</p>
        <p>&#x270C;You can Adopt Our Animals.</p>
        <p> &#x2714;You can Bring your camera and snacks. </p>
        <p>&#x2716;Do not give food to Animals.</p>
        <p>&#x2716;Do not get close to the cage.</p>
        <p>&#x2709;Contact us: park@gmail.com</p>
    </marquee>
</div>
    </div>
  )
}

