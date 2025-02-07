import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import theme from '../Assets/theme.gif'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (<div>
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
      <img src={theme} alt="" width="100%" height="100%" />
    </div>

    <div className="wrapper">
      <div className="auth-inner">

        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <br />
          
         
          <Link to='/userpg'>
            <button className="btn btn-primary">
              Explore
            </button>
          </Link>
          <br />
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>

  </div>
  );
}
