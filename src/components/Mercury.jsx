import planets from "../data.json";
import source from "/assets/icon-source.svg";
import { MDBTypography } from "mdb-react-ui-kit";


console.log(planets)

// const mercury = planets[0];


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

        

      </main>
    </>
  ) 
};

export default Mercury;
