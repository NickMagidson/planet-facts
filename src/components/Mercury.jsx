import planets from "../data.json";
import source from "/assets/icon-source.svg";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";


// planet, setPlanet for useState?
const { overview, structure, geology, name, images, rotation, revolution, radius, temperature } = planets[0]



const Mercury = () => {
  return (
    <>
      <div>
        {/* Try routing!? */}
        {/* Overview */}
        {/* Structure */}
        {/* Geology */}
      </div>
      <main className="d-flex flex-column align-items-center h-100">

        <img src={images.planet} className="w-25 mt-5" alt="planet" />

        <div className="text-section d-flex flex-column align-items-center">
          <h1 className="planet-name m-0">{name.toUpperCase()}</h1>
          <MDBTypography tag='p' className="planet-desc p-4 text-center">{overview.content}</MDBTypography>
          <MDBTypography tag='p' className="planet-source text-sm-start">Source: <span>Wikipedia <img src={source} /></span></MDBTypography>
        </div>

        <MDBContainer className="h-100">
          <MDBRow className="mb-3 p-4 h-0">
            <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-3 h-10 border border-dark">
              <MDBTypography tag='p' className="planet-grid-title m-0">ROTATION TIME</MDBTypography>
              <MDBTypography tag='h3' className="planet-grid-info m-0">{rotation}</MDBTypography>
            </MDBCol>

            <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-3 h-10 border border-dark gy-3">
              <MDBTypography tag='p' className="planet-grid-title m-0">REVOLUTION TIME</MDBTypography>
              <MDBTypography tag='h3' className="planet-grid-info m-0">{revolution}</MDBTypography>
            </MDBCol>

            <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-3 h-10 border border-dark gy-3">
              <MDBTypography tag='p' className="planet-grid-title m-0">RADIUS</MDBTypography>
              <MDBTypography tag='h3' className="planet-grid-info m-0">{radius}</MDBTypography>
            </MDBCol>

            <MDBCol size='md' className="d-flex flex-row justify-content-between align-items-center p-3 h-10 border border-dark gy-3">
              <MDBTypography tag='p' className="planet-grid-title m-0">AVERAGE TEMP.</MDBTypography>
              <MDBTypography tag='h3' className="planet-grid-info m-0">{temperature}</MDBTypography>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </main>
    </>
  ) 
};

export default Mercury;
