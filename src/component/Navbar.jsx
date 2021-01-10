import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light  bg-dark '>
        <div className='navbar-brand text-white' href='#'>
          Mk
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon bg-light'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ml-auto  '>
            <li className='nav-item active'>
              <Link to='/' className='nav-link  text-white' id='link' style={{color: "black", textDecoration: "none"}}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Register' className='nav-link text-white' style={{color: "black", textDecoration: "none"}}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
