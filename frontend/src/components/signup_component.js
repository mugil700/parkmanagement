import React, { Component, useState } from "react";
import './navbar.css'
import './signup.css'
import sij from '../Assets/sij.gif'
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "park") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

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
      <img src={sij} alt="" width="100%" height="100%" />
      </div>
      <div className="wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div>
              Register As
              <input
                type="radio"
                name="UserType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}
              />
              User
              <input
                type="radio"
                name="UserType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
              />
              Admin
            </div>
            {userType == "Admin" ? (
              <div className="mb-3">
                <label>Secret Key</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Secret Key"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
            ) : null}

            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>
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
  );
}
