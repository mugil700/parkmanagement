import React from 'react'
import Iframe from 'react-iframe'
import org from '../Assets/org.avif'
import { Link } from 'react-router-dom'


export default  function Shark() {
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
      <img src={org} alt="" width="100%" height="100%" />
      </div>
         <Iframe url="https://youtu.be/og8bbxl0iW8"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      styles={{marginTop:'200px',marginLeft:'450px'}}/>
    </div>
  )
}

