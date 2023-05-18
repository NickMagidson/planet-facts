import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { default as Arrow } from '/assets/icon-chevron.svg';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import planets from '../data.json';

export default function Navbar() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  const handleCollapse = () => {
    setShowNavExternal3(!setShowNavExternal3)
  }

  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    opacity: '60%',
    fontSize: '1rem',
    margin: 'auto'
  }

  return (
    <>
      <MDBNavbar className=' navbar navbar-expand-md'>
        <MDBContainer className='nav-container d-flex align-items-center' fluid>
        <Link to='/'><h1 className='nav-title navbar-expand-md'>THE PLANETS</h1></Link>
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

          {/* 2ND NAVBAR FOR BIGGER SCREENS */}
          <nav id='main-nav-items' className='d-flex align-items-center w-auto'>
            {planets.map( (planetName, index) => {
              return <Link key={index} style={linkStyles} className='nav-link text-light' to={'/' + planetName.name}>{planetName.name.toUpperCase()}</Link>
            })}
          </nav>
        </MDBContainer>
      </MDBNavbar>

      {/* MOBILE NAVBAR MENU */}
      <MDBCollapse className='navbar-expand-md' show={showNavExternal3}>
        <nav className='bg-transparent shadow-3 p-4'>
          {planets.map( (planetName, index) => {
            return (
              <MDBBtn block key={index} className='btn border-bottom border-dark m-0 p-2 d-flex align-items-center justify-content-between' color='link'>
                <div className='d-inline-flex justify-content-left align-items-center w-100 text-left'>
                  <span style={{ backgroundColor: planetName.color}} className='dot'></span>
                  <Link 
                    style={{ fontSize: "1.2rem" }} 
                    onClick={handleCollapse} 
                    className='nav-link text-light' 
                    to={'/' + planetName.name}> {planetName.name.toUpperCase()} 
                  </Link>
                </div>    
                <img src={Arrow} />         
              </MDBBtn>
            )
          })}
        </nav>
      </MDBCollapse>
      <hr style={{borderTop: '1px solid #bbb', margin: '0'}} ></hr>
    </>
  );
}