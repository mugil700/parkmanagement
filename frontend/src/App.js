import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";
import Userpg from "./components/userpg";
import Ticket from "./components/ticket";
import About from "./components/about";
import Adminpg from "./components/adminpg";
import AdminHome from "./components/adminHome";
import Map from "./components/map";
import Ticketadmin from "./components/ticketadmin";
import Payment from "./components/payment";
import Animalsadopt from "./components/animalsadopt";
import Gallery from "./components/gallery";
import Virtual from "./components/virtual";
import Tiger from "./components/tiger";
import Panda from "./components/panda";
import Shark from "./components/shark";
import Adminworker from "./components/adminworker";
import Adminanimal from "./components/adminanimal";
import Adminadopt from "./components/adminadopt";



function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/userpg" element={<Userpg />} />
          <Route path="/tickett" element={<Ticket />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminpg" element={<Adminpg />} />
          <Route path="/adminhm" element={<AdminHome />} />
          <Route path="/map" element={<Map />} />
          <Route path="/ticketadm" element={<Ticketadmin />} />
          <Route path="/paymnt" element={<Payment />} />
          <Route path="/animalad" element={<Animalsadopt />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/virt" element={<Virtual />} />
          <Route path="/shar" element={<Shark />} />
          <Route path="/tgr" element={<Tiger />} />
          <Route path="/pan" element={<Panda />} />
          <Route path="/admwork" element={<Adminworker />} />
          <Route path="/admanimal" element={<Adminanimal />} />
          <Route path="/admadopt" element={<Adminadopt />} />




        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
