import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { default as Arrow } from '../assets/icon-chevron.svg';
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

  const linkStyles = {
    opacity: '60%',
    fontSize: "1rem",
  }

  return (
    <>
      <MDBNavbar className=' navbar navbar-expand-md'>
        <MDBContainer className='nav-container d-flex align-items-center' fluid>
        <h1 className='nav-title navbar-expand-md'>THE PLANETS</h1>
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


          <div id='main-nav-items' className='d-flex align-items- w-auto p-2'>
            <Link style={linkStyles} className='nav-link text-light' to='/mercury'>MERCURY</Link>           
            <Link style={linkStyles} className='nav-link text-light' to='/venus'>VENUS</Link>    
            <Link style={linkStyles} className='nav-link text-light' to='/earth'>EARTH</Link>           
            <Link style={linkStyles} className='nav-link text-light' to='/mars'>MARS</Link>    
            <Link style={linkStyles} className='nav-link text-light' to='/jupiter'>JUPITER</Link>                 
            <Link style={linkStyles} className='nav-link text-light' to='/saturn'>SATURN</Link>    
            <Link style={linkStyles} className='nav-link text-light' to='/uranus'>URANUS</Link>    
            <Link style={linkStyles} className='nav-link text-light' to='/neptune'>NEPTUNE</Link>    
          </div>
        </MDBContainer>

      </MDBNavbar>


      <MDBCollapse className='navbar-expand-md' show={showNavExternal3}>
        <div className='bg-transparent shadow-3 p-4'>

          {/****** MERCURY ******/}
          <MDBBtn block className='btn border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex justify-content-between align-items-center'>
              <span className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/mercury'>Mercury</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>
          {/****** VENUS ******/}
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span style={{backgroundColor: '#F7CC7F'}} className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/venus'>Venus</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>
          {/****** EARTH ******/}
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span style={{backgroundColor: '#545BFE'}} className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/earth'>Earth</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>
          {/****** MARS ******/}
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span style={{backgroundColor: '#FF6A45'}} className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/mars'>Mars</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>
          {/****** JUPITER ******/}
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span style={{backgroundColor: '#ECAD7A'}} className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/jupiter'>Jupiter</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>
          {/****** SATURN ******/}
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span style={{backgroundColor: '#FCCB6B'}} className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/saturn'>Saturn</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>
          {/****** URANUS ******/}
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span style={{backgroundColor: '#65F0D5'}} className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/uranus'>Uranus</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>
          {/****** NEPTUNE ******/}
          <MDBBtn block className='border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
            <div className='d-inline-flex  justify-content-between align-items-center'>
              <span style={{backgroundColor: '#497EFA'}} className='dot'></span>
              <Link style={{ fontSize: "1.2rem" }} className='nav-link text-light' to='/neptune'>Neptune</Link>
            </div>    
            <img src={Arrow} />         
          </MDBBtn>

        </div>
      </MDBCollapse>
      <hr style={{borderTop: '1px solid #bbb', margin: '0'}} ></hr>
    </>
  );
}