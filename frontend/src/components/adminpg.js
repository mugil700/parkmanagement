import React from 'react'
import { Link } from 'react-router-dom'
import adm from "../Assets/adm.jpg"
import hom from "../Assets/hom.svg"
import news from '../Assets/news.svg'
import brs from "../Assets/brs.svg"
import ussr from '../Assets/ussr.jpg'
import anil from '../Assets/anil.jpg'
import ttt from '../Assets/ttt.jpg'
import zkk from '../Assets/zkk.jpg'
import pup from '../Assets/pup.gif'





export default function Adminpg() {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-dark navbar-dark" >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to="/adminpg"  class="nav-link">
        <li class="nav-item active">
         Home 
        </li>
        </Link>
       
      </ul>
      <ul class="nav navbar-nav navbar-right" style={{marginLeft:'700px'}}>
        <li style={{color:'brown'}}>Admin</li>

      </ul>
      
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={logOut} id="buu">Log Out</button>
   
    </div>
  </nav>

      <div id="dd">
        <img src={adm} alt="" width="100%" height="100%" />
      </div>
      <Link to="/adminhm">
  <div id='one'>
  <img src={ussr} alt="" width="70" height="200" />
  <div id='tx'>User Details</div>
  </div>
  </Link>
  <Link to="/ticketadm">
  <div id='tw'>
  <img src={ttt} alt="" width="70" height="200" />
  <div id='tx'>Tickets</div>
  </div>
  </Link>
  <Link to="/admadopt">
  <div id='thr'>
  <img src={pup} alt="" width="70" height="200" />
  <div id='tx'>Animals Adoption</div>
  </div>
  </Link>
  <br/>
  <br/>
  <Link to="/admanimal">
  <div id='thr'>
  <img src={anil} alt="" width="70" height="200" />
  <div id='tx'>Animals in Zoo</div>
  </div>
  </Link>
  <br/>
  <br/>
  <Link to="/admwork">
  <div id='thr'>
  <img src={zkk} alt="" width="70" height="200" />
  <div id='tx'>Workers</div>
  </div>
  </Link>
  
  
     
      
      
      
    </div>




  )
}
