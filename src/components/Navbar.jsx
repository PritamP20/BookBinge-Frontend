import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-expand-md border-bottom border-3 border-black">
  <div class="container-fluid">
    <a class="navbar-brand m-auto pe-lg-3 pe-md-3 text-black col-lg-2 col-md-3 col-5" href="/"> <img className='col-12' src={logo} alt="" /> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto  mb-2 col mb-lg-0 gap-lg-5 fs-3 ">
        <li class="nav-item">
          <a class="underline-hover nav-link active text-black" aria-current="page" href="/allbooks">Home</a>
        </li>
        <li class="nav-item ">
          <a class="underline-hover nav-link text-black" href="/seller">seller</a>
        </li>
        <li class="nav-item ">
          <a class="underline-hover nav-link text-black" href="/delete">Delete</a>
        </li>
        <li class="nav-item ms-lg-auto ms-md-auto">
          <a class="underline-hover nav-link text-black" href="/seller">Login</a>
        </li>
      
        
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success text-black" type="submit">Search</button>
      </form> */}
      {/* <a className='fs-3 text-black p-1 text-black justify-content-center align-items-center' href="/login"><FaUser className=''/></a> */}
      {/* <a class="nav-link fs-5 active text-black" aria-current="page" href="/login">Login</a> */}
    </div>
  </div>
  
</nav>
  );
};

export default Navbar;
