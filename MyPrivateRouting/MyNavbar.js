import React from 'react'
import { Link } from 'react-router-dom'
import MyForm from './MyForm'
const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg  bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-light" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-light" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link text-light" to="/Dashboard">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/MyForm">Login</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>






      {/* ------------------------------------------------------------------  */}
{/*
<nav class="navbar navbar-expand-lg  bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link text-light" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Login</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav> */}


    </div>
  )
}

export default Navbar