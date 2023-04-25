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
      <div>
        {/* Try routing!? */}
        <MDBBtnGroup className="w-100 bg-transparent">
          <MDBBtn className="planet-btn bg-transparent text-white-50">
            <MDBTypography tag='p' className="planet-btn m-0 p-2">Overview</MDBTypography>
          </MDBBtn>
          <MDBBtn className="planet-btn bg-transparent text-white-50">
            <MDBTypography tag='p' className="planet-btn m-0 p-2">Structure</MDBTypography>
          </MDBBtn>
          <MDBBtn className="planet-btn bg-transparent text-white-50">
            <MDBTypography tag='p' className="planet-btn m-0 p-2">Geology</MDBTypography>
          </MDBBtn>
        </MDBBtnGroup>
      </div>
      <hr style={{borderTop: '1px solid #bbb', margin: '0'}} ></hr>
      <main className="d-flex flex-column align-items-center h-100">

        <div className="img-container m-0 w-100 d-flex justify-content-center align-items-center">
          <img src={images.planet} className="w-25" alt="planet" />
        </div>

        <section className="text-section">

          <div className="d-flex flex-column align-items-center">
            <h1 className="planet-name m-0">{name.toUpperCase()}</h1>
            <MDBTypography tag='p' className="planet-desc p-4 text-center">{overview.content}</MDBTypography>
            <MDBTypography tag='p' className="planet-source text-sm-start">Source: <span>Wikipedia <img src={source} /></span></MDBTypography>
          </div>

      
            <MDBRow className="mb-3 m-0 p-4 h-0">
              <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-2 border border-dark">
                <MDBTypography tag='p' className="planet-grid-title m-0">ROTATION TIME</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0">{rotation}</MDBTypography>
              </MDBCol>

              <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-2 border border-dark gy-3">
                <MDBTypography tag='p' className="planet-grid-title m-0">REVOLUTION TIME</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0">{revolution}</MDBTypography>
              </MDBCol>

              <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-2 border border-dark gy-3">
                <MDBTypography tag='p' className="planet-grid-title m-0">RADIUS</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0">{radius}</MDBTypography>
              </MDBCol>

              <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-2 border border-dark gy-3">
                <MDBTypography tag='p' className="planet-grid-title m-0">AVERAGE TEMP.</MDBTypography>
                <MDBTypography tag='h3' className="planet-grid-info m-0">{temperature}</MDBTypography>
              </MDBCol>
            </MDBRow>
         
        </section>

      </main>
    </>
  ) 
};

export default Mercury;
