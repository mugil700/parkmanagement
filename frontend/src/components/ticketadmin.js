import React , {component , useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import adm from "../Assets/adm.jpg"

export default function Ticketadmin({ticket}) {
   
    const [data, setData] = useState([]);



    useEffect(() => {
        fetch("http://localhost:5000/getAllTicket", {
          method: "GET",
        })
        .then((res) => res.json())
      .then((data) => {
        console.log(data, "ticket");   
        setData(data.data); 
        });
    },[]);


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
  
  <br/>
  <br/>
  <br/>

  <div className="auth-wrapper" style={{ height: "auto"}}>
      <div className="auth-inner" style={{ width: "auto" }}>
        
        <table style={{ width: 500 }}>
          <tr>
            <th>User Name</th>
            <th>Date</th>
            <th>Persons</th>
            <th>Total Amount</th>
            
          </tr>
          {data.map((i) => {
            return (
              <tr>
                <td>{i.name}</td>
                <td>{i.date}</td>
                <td>{i.adult}</td>
                <td>{i.amount}</td>
              </tr>
            )
          })}
        </table>
        </div>
        </div>
        
        </div>
  )
}

