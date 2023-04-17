import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { default as Arrow } from '../assets/icon-chevron.svg';
import { default as MercuryIcon } from '../assets/icon-source.svg';
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
      <hr style={{borderTop: '1px solid #bbb', margin: '0'}} ></hr>

      <MDBCollapse show={showNavExternal3}>
        <div className='bg-transparent shadow-3 p-4'>
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span className='dot '></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/mercury'>Mercury</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>

          <MDBBtn block className='border-bottom m-0 d-flex justify-content-between' color='link'>
            <Link to='/venus'>Venus</Link>
          </MDBBtn>

          <MDBBtn block className='border-bottom m-0 d-flex justify-content-between' color='link'>
            Link 3
          </MDBBtn>

        </div>
      </MDBCollapse>
    </>
  );
}