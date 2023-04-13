// import { Link } from "react-router-dom"

// function Navbar() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li><Link to="mercury">Mercury</Link></li>
//           <li><Link to="venus">Venus</Link></li>
//         </ul>
//       </nav>
//     </>
//   )
// }


import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <MDBNavbar className='navbar'>
        <MDBContainer className='nav-container' fluid>
        <h1 className='nav-title'>THE PLANETS</h1>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon className='burger' icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
      {/* <hr style={{bordertop: '3px solid #bbb', margin: 'none'}} ></hr> */}

      <MDBCollapse show={showNavExternal3}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 1
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 2
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 2
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}