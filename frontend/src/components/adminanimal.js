import React , { useState }from 'react'
import { Link } from 'react-router-dom'
import ddr from "../Assets/ddr.jpg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





export default function Adminanimal() {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  const [species, setSpecies] = useState("");
  const [animals, setAnimals] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(species , animals);
  }






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

    <div id='dd'>
  <img src={ddr} alt="" width="100%" height="100%" ></img>
  <marquee style={{ position: 'absolute', top: '30%', left: ' 50%', transform: 'translate(-50%, -50%)', color: 'red', fontWeight: 'bold', fontSize: '50px' }}>Animals Stock</marquee>
  </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



  <div className="auth-wrapper" style={{ height: "100%" }}>
        <div className="auth-inner" style={{ width: "100%" }}>

          <table style={{ width: "100%" }}>
            <tr>
              <th >S.No</th>
              <th>Class</th>
              <th>species(In Nos.)</th>
              <th>Animals(In Nos.)</th>
              
            </tr>
           <tr>
            <td>1</td>
            <td>Mammals</td>
            <td>{species}</td>
            <td>{animals}</td>
            <td><button className="btn btn-primary" onClick={handleShow}>Update</button></td>
           </tr>
           
           <tr>
            <td>2</td>
            <td>Birds</td>
            <td>{species}</td>
            <td>{animals}</td>

            <td><button className="btn btn-primary">Update</button></td>
           </tr>
           
           <tr>
            <td>3</td>
            <td>Reptiles</td>
            <td></td>
            <td></td>
            <td><button className="btn btn-primary">Update</button></td>
           </tr>

          </table>
          </div>
          </div>
          <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Updation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div>
                <input class="form-control" type="number" placeholder="Enter No of Species"  onChange={(e) => setSpecies(e.target.value)} />
              </div>
              <br />
              
              <div>
                <input class="form-control" type="number" id="nn"   placeholder="Enter No of Animals"   onChange={(e) => setAnimals(e.target.value)}/>
              </div>
              <br />

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      
      
    </div>




  )
}
