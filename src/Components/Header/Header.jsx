import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">SHOP</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">HELP</a>
        </li>
      </ul>
      <h1 className='h1'>E-commerce</h1>
      <ul class="navbar-nav">
        <li class="nav-item">
            <div className='h'>
          <a class="nav-link active" aria-current="page" href="/Login">LOGIN</a>
             </div>
        </li>
        </ul>  
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
