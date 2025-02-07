import React from 'react'
import { Link } from 'react-router-dom'
import zzkk from "../Assets/zzkk.jpg";





export default function Adminworker() {
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
  <div id="dd" >
          <img src={zzkk} alt="" width="100%" height="100%" />
        </div>
        <br/>

        <div  className="auth-wrapper"  style={{ height: "100%" }}>
        <div  className="auth-inner" style={{ width: "100%"  }}>

          <table style={{ width: "100%"}}>
            <tr>
              <th >Name</th>
              <th>position</th>
              <th>salary</th>
             
            </tr>
            <tr>
              <td>Henry</td>
              <td>Personal Manager</td>
              <td>Rs.50000</td>
            
            </tr>
            <tr>
              <td>mathew</td>
              <td>Assistant Person Manager</td>
              <td>Rs.40000</td>
            
            </tr>
            <tr>
              <td>Harry</td>
              <td>Finance Manager</td>
              <td>Rs.45000</td>
              
            </tr>
            <tr>
              <td>carol</td>
              <td>Assistant Finance Manager</td>
              <td>Rs.35000</td>
              
            </tr>
            <tr>
              <td>Mark</td>
              <td>Animal Caretaker</td>
              <td>Rs.30000</td>
             
            </tr>
            <tr>
              <td>Esther</td>
              <td>Animal Caretaker</td>
              <td>Rs.30000</td>
              
            </tr>
            <tr>
              <td>Emily</td>
              <td>Animal Caretaker</td>
              <td>Rs.30000</td>
            </tr>
            <tr>
              <td>Miller</td>
              <td>Animal Caretaker</td>
              <td>Rs.30000</td>
            </tr>
            <tr>
              <td>Emma</td>
              <td>Veterinary</td>
              <td>Rs.40000</td>
            </tr>

            <tr>
              <td>Brian</td>
              <td>Veterinary</td>
              <td>Rs.40000</td>
            </tr>

            <tr>
              <td>Tommy</td>
              <td>Veterinary</td>
              <td>Rs.40000</td>
            </tr>

            <tr>
              <td>Leon</td>
              <td>Veterinary</td>
              <td>Rs.40000</td>
            </tr>

            <tr>
              <td>Max</td>
              <td>Zookeeper</td>
              <td>Rs.20000</td>
            </tr>

            <tr>
              <td>Adam</td>
              <td>Zookeeper</td>
              <td>Rs.20000</td>
            </tr>
            <tr>
              <td>Margot</td>
              <td>Zookeeper</td>
              <td>Rs.20000</td>
            </tr>
            <tr>
              <td>Myers</td>
              <td>Zookeeper</td>
              <td>Rs.20000</td>
            </tr>
            <tr>
              <td>Cassandra</td>
              <td>Zookeeper</td>
              <td>Rs.20000</td>
            </tr>
            <tr>
              <td>Christin</td>
              <td>Security</td>
              <td>Rs.15000</td>
            </tr>
            <tr>
              <td>Robert</td>
              <td>Security</td>
              <td>Rs.15000</td>
            </tr>
            <tr>
              <td>Hank</td>
              <td>Security</td>
              <td>Rs.15000</td>
            </tr>
            <tr>
              <td>Jaffer</td>
              <td>Security</td>
              <td>Rs.15000</td>
            </tr>



          </table>
          <br />
          <br />
        </div>
      </div>
  
     
      
      
      
    </div>




  )
}
