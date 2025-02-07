import React, { useState } from 'react'
import aniad from "../Assets/aniad.avif";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { render } from 'react-dom';




export default function Animalsadopt() {


  const [email, setEmail] = useState("");
  const [amt, setAmt] = useState("");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=(e)=> {

    e.preventDefault();
    console.log(email , amt);
    fetch("http://localhost:5000/adapt", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
       email,
       amt,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userAdapt");
    })




   setShow(false);
    
  alert('Payment Successfull')
   
   

  }









  return (
    <div >
      <div >
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
      </div>
      <div >
        <img src={aniad} alt="" width="100%" height="100%" ></img>
        <marquee style={{ position: 'absolute', top: '30%', left: ' 50%', transform: 'translate(-50%, -50%)', color: 'red', fontWeight: 'bold', fontSize: '50px' }}>Animal Adoption</marquee>
        <br />

        <marquee style={{ position: 'absolute', top: '50%', left: ' 50%', color: 'white', fontWeight: 'bold', fontSize: '50px' }}>Scroll Down For More..</marquee>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <br />

        <h1 style={{ color: 'aqua' }}>Animal Adoption Program</h1>
        <br />
        <br />

        <p style={{ color: 'green', fontSize: "20px", fontWeight: 'bold' }}>This Park is one of the prime wildlife conservation centers in the country. The concept of zoo has evolved from pure entertainment to research and conservation education in the recent years. Animal adoption gives you an opportunity to become a conservationist. Your adoption supports the highest standard of care for the animals at the Zoo and symbolizes your passion towards their conservation.</p>

        <span style={{ color: 'purple', fontSize: "20px", fontWeight: 'bold' }}>Why should you adopt an animal?</span>
        <br />
        <p style={{ color: 'brown', fontSize: "20px", fontWeight: 'bold' }}>The animal what we house in the zoo are the representatives of their counterparts in the wild. So when you adopt an animal of our zoo, you voice for the conservation of that animal species and also help to spread out a message to others about this. You will also probably have a hairy, furry, scaly or a feathered friend who will make your zoo visit a special one. You can go a step further than other normal zoo visitor and become ‘A Voice of the Voiceless’ by adopting an animal. All your donations go directly towards the cost of caring for our zoo animal.</p>
        <br />
        <br />
      </div>



      <div>

      </div>
      <div className="auth-wrapper" style={{ height: "100%" }}>
        <div className="auth-inner" style={{ width: "100%" }}>

          <table style={{ width: "100%" }}>
            <tr>
              <th >Animals</th>
              <th>Period</th>
              <th>Amount</th>
              <th>Pay</th>
            </tr>
            <tr>
              <td>1 Tiger</td>
              <td>1 Day</td>
              <td>300.00</td>
              <td><button className="btn btn-primary" variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>
            <tr>
              <td>1 Lion</td>
              <td>1 Week</td>
              <td>5000.00</td>
              <td><button className="btn btn-primary"  variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>
            <tr>
              <td>1 Peacock</td>
              <td>1 Day</td>
              <td>300.00</td>
              <td><button className="btn btn-primary"  variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>
            <tr>
              <td>1 Elephant</td>
              <td>1 Month</td>
              <td>2000.00</td>
              <td><button className="btn btn-primary"  variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>
            <tr>
              <td>1 Deer</td>
              <td>1 Day</td>
              <td>500.00</td>
              <td><button className="btn btn-primary"  variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>
            <tr>
              <td>1 Vulture</td>
              <td>2 Day</td>
              <td>1200.00</td>
              <td><button className="btn btn-primary"  variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>
            <tr>
              <td>1 Mascaw Parrot</td>
              <td>1 Day</td>
              <td>300.00</td>
              <td><button className="btn btn-primary"  variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>
            <tr>
              <td>1 India Cobra</td>
              <td>1 Week</td>
              <td>3000.00</td>
              <td><button className="btn btn-primary"  variant="primary" onClick={handleShow}>Pay</button></td>
            </tr>

          </table>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onsubmit={handleSubmit}>
              <div>
                <input class="form-control" type="email" id="ee" placeholder="Enter Your Email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(e) => setEmail(e.target.value)} />
               
              </div>
              <br />
              <div class="col-sm-4">
                            <div class="form-group">
                              <select class="form-control" >
                                <option >Select Animal</option>
                                <option>1 Tiger</option>
                                <option>1 Lion</option>
                                <option>1 Peacock</option>
                                <option>1 Elephant</option>
                                <option>1 Deer</option>
                                <option>1 Vulture</option>
                                <option>1 Mascaw Parrot</option>
                                <option>1 India Cobra</option>
                               
                              </select>

                            </div>
                          </div>
              <br />
              <div>
                <input class="form-control" type="text" id="nn" pattern=".{12}"  placeholder="Enter Your Card Number" />
              </div>
              <br />
              <div class="row">
                <div class="col-sm-4">
                  <input type="month" class="form-control" placeholder="MM / YY" />

                </div>
                <div class="col-sm-4">
                  <input type="password" class="form-control" placeholder="CVV" maxLength="3" />
                </div>
              </div>
              <br />
              <div>
                <div class="col-sm-5">
                  <div class="form-group">
                    <input class="form-control" type="number" id="nn" placeholder="Enter the Amount"  onChange={(e) => setAmt(e.target.value)}/>
                  </div>
                </div>
              </div>
              <br/> 
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Pay
            </Button>
          </Modal.Footer>
        </Modal>
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
  )

}

