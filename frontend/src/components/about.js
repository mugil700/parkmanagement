import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
//import './about.css';
import abt1 from '../Assets/abt1.png';
import abt2 from '../Assets/abt2.png';
import abt3 from '../Assets/abt3.png';





export default class About extends React.Component{
    render(){
        return(
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
  

<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">About us </h1>
        <p class="lead text-muted mb-0">Until the early 19th century, the function of the zoo was often to symbolize royal power, like King Louis XIV's menagerie at Versailles. Major cities in Europe set up zoos in the 19th century, usually using London and Paris as models. The transition was made from princely menageries designed to entertain high society with strange novelties into public zoological gardens. The new goal was to educate the entire population with information along modern scientific lines. Zoos were supported by local commercial or scientific societies.</p>
        <p class="lead text-muted"> <Link to="/about" class="text-muted"> 
                    <u style={{color:'blueviolet'}}>Sign-Up</u></Link>
        </p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={abt1} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Animals</h2>
        <p class="font-italic text-muted mb-4">From biggest cats to the tiniest birds, the zoo has all kinds of animals and birds. Initially, it was known as Delhi Zoo when in 1982 it was renamed The National Zoological Park with the idea of making it the model zoo of the country.At the Zoological Park, birds and animals live in an environment that in many ways resemble their natural habitat. The zoo not only provides a home for endangered species but also helps them to breed in captivity. It also holds Conservation Breeding Programmes for Asiatic Lion, Royal Bengal Tiger, Brow Antlered Deer, Swamp Deer, Indian rhinoceros and red jungle fowl. Eventually, they may once again thrive in the wild.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Explore</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={abt2} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src={abt3} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Amusment Rides</h2>
        <p class="font-italic text-muted mb-4">The park features a wide variety of attractions including 55 land and water rides, a musical fountain, laser shows, and a virtual reality show.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Explore</a>
      </div>
    </div>
  </div>
</div>

<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted"></p>
      </div>
    </div>

    <div class="row text-center">
     
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Monisha</h5><span class="small text-uppercase text-muted">Founder</span>
          <ul class="social anuella Nevoreskymb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    

     
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
   

     
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">COO</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
     

      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">Managing Director</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      

    </div>
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
}
