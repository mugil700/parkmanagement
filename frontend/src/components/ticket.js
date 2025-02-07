import React, { Component, useRef, useState } from 'react'
import panda from '../Assets/panda.jpg'
import { Link } from 'react-router-dom';






export default class Ticket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      adult: "",
      amount: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, date, adult, amount } = this.state;
    console.log(name, date, adult, amount);
    alert("Booked Succesfully");
    fetch("http://localhost:5000/ticket", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        date,
        adult,
        amount,
      }),
    })


      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userTicket");
      })

  }

  tckt(v) {

    let { val } = this.setState;
    console.log(v.val);
    var x = v.val * 100;
    document.getElementById("tot").value = x;

  }




  render(

  ) {

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
          <img src={panda} alt="" width="100%" height="100%" />
        </div>
        <div className="wrapper">
          <div id="booking" class="section">
            <div class="section-center">
              <div class="container">
                <div class="row">
                  <div class="col-md-7 col-md-push-5">
                    <div class="booking-cta">
                      <h1 style={{ color: "green" }}>Make your reservation</h1>

                    </div>
                  </div>
                  <div class="col-md-4 col-md-pull-7">
                    <div class="booking-form">
                      <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                          <label>Your User Name</label>
                          <input class="form-control" type="text" id="nn" placeholder="Enter Your Name"    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"   onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label>Enter Date</label>
                              <input class="form-control" type="date" required onChange={(e) => this.setState({ date: e.target.value })} />
                            </div>
                          </div>

                        </div>
                        <div class="row">

                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Persons</label>
                              <select class="form-control" onInput={(v) => this.tckt({ val: v.target.value })}
                                onChange={(e) => this.setState({ adult: e.target.value })}>
                                <option >0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>

                              </select>

                            </div>
                          </div>


                          <div class="col-sm-5">
                            <div class="form-group">
                              <label>Total Amount</label>
                              <input class="form-control" id='tot' onPointerEnter={(e) => this.setState({ amount: e.target.value })} />

                            </div>
                          </div>
                        </div>
                        <br />
                        <div>
                          <input type="" class="form-control" pattern=".{12}" id="nn" placeholder="Enter Your Card Number"  />
                        </div>
                        <br/>
                        <div class="row">
                        
                          <div class="col-sm-4">
                            <input type="month" class="form-control" placeholder="MM / YY" />

                          </div>
                          <div class="col-sm-4">
                            <input type="password" class="form-control" placeholder="CVV" maxLength="3" />
                          </div>
                        </div>
                        <br />



                        <div class="d-grid">
                          <button type="submit" className="btn btn-primary">Book</button>
                        </div>
                        <br />


                        <div>
                          <p>For a Person Rs.100 , Above Age 12 only need tickets. </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
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
}


