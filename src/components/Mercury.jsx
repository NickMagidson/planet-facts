import { useState } from "react";
import planets from "../data.json";
import source from "/assets/icon-source.svg";
import { MDBCol, MDBRow, MDBTypography, MDBBtnGroup, MDBBtn } from "mdb-react-ui-kit";



const Mercury = () => {
  // useEffect for async json data fetching?
  const [ planet, setPlanet ] = useState([])
  const [ summary, setSummary ] = useState()
  const { overview, structure, geology, name, images, rotation, revolution, radius, temperature } = planets[0]


  return (
    <>
        <MDBBtnGroup className=" btn-group w-100 bg-transparent">
          <MDBBtn className="planet-btn w-100 bg-transparent text-white-50">
            <MDBTypography tag='p' className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">01</span>    Overview</MDBTypography>
          </MDBBtn>
          <MDBBtn className="planet-btn w-100 bg-transparent text-white-50">
            <MDBTypography tag='p' className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">02</span>   Structure</MDBTypography>
          </MDBBtn>
          <MDBBtn className="planet-btn w-100 bg-transparent text-white-50">
            <MDBTypography tag='p' className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">03</span>   Geology</MDBTypography>
          </MDBBtn>
        </MDBBtnGroup>
    
      <hr className="d-sm-none" style={{borderTop: '1px solid #bbb', margin: '0'}} ></hr>
      <main className="d-flex flex-column align-items-center h-100">

        <div className="img-container m-0 w-100 d-flex justify-content-center align-items-center">
          <img src={images.planet} className="w-25 planet-img" alt="planet" />
        </div>

        <section className="text-section">

          <div className="tablet-info">
            <div className="text-blurb d-flex flex-column align-items-center justify-content-sm-start">
              <h1 className="planet-name m-0 ">{name.toUpperCase()}</h1>
              <MDBTypography tag='p' className="planet-desc p-4 ">{overview.content}</MDBTypography>
              <MDBTypography tag='p' className="planet-source ">Source: <span>Wikipedia <img src={source} /></span></MDBTypography>
            </div>

            <MDBBtnGroup className="btn-group-2 w-100 bg-transparent d-none d-sm-block">
              <MDBBtn className="planet-btn w-100 bg-transparent text-white-50">
                <MDBTypography tag='p' className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">01</span>    Overview</MDBTypography>
              </MDBBtn>
              <MDBBtn className="planet-btn w-100 bg-transparent text-white-50">
                <MDBTypography tag='p' className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">02</span>   Structure</MDBTypography>
              </MDBBtn>
              <MDBBtn className="planet-btn w-100 bg-transparent text-white-50">
                <MDBTypography tag='p' className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">03</span>   Geology</MDBTypography>
              </MDBBtn>
            </MDBBtnGroup>
          </div>
      
            <MDBRow className="info-grid mb-3 m-0 p-4 h-0">
              <MDBCol size='md' className="grid-block p-2 border border-dark gy-3">
                <MDBTypography tag='p' className="planet-grid-title m-0 w-100">ROTATION TIME</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0 w-100">{rotation}</MDBTypography>
              </MDBCol>

              <MDBCol size='md' className="grid-block p-2 border border-dark gy-3">
                <MDBTypography tag='p' className="planet-grid-title m-0 w-100">REVOLUTION TIME</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0 w-100">{revolution}</MDBTypography>
              </MDBCol>

              <MDBCol size='md' className="grid-block p-2 border border-dark gy-3">
                <MDBTypography tag='p' className="planet-grid-title m-0 w-100">RADIUS</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0 w-100">{radius}</MDBTypography>
              </MDBCol>

              <MDBCol size='md' className="grid-block p-2 border border-dark gy-3">
                <MDBTypography tag='p' className="planet-grid-title m-0 w-100">AVERAGE TEMP.</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0 w-100">{temperature}</MDBTypography>
              </MDBCol>
            </MDBRow>
         
        </section>

      </main>
    </>
  ) 
};

export default Mercury;
