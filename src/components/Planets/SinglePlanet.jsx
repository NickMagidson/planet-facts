import { useEffect, useState } from "react";
import planets from "../../data.json";
import source from "/assets/icon-source.svg";
import { MDBCol, MDBRow, MDBBtnGroup, MDBBtn } from "mdb-react-ui-kit"; 
import '../../sass/index.scss';

const SinglePlanet = ({ planetIndex }) => {
  const [planet, setPlanet] = useState(planets[planetIndex])
  const { overview, structure, geology, name, images, rotation, revolution, radius, temperature } = planet

  const [summary, setSummary] = useState(overview.content)
  const [image, setImage] = useState(images.planet);

  const handleSummary = (content) => {
    setSummary(content);

    const imageMap = {
      [overview.content]: images.planet,
      [structure.content]: images.internal,
      [geology.content]: images.geology
    };

    setImage(imageMap[content]);
  };

  useEffect(() => {
    setPlanet(planets[planetIndex])
  }, [planetIndex])

  return (
    <>
        {/* BUTTONS FOR SUMMARY CHANGES */}
      <MDBBtnGroup className="btn-group w-100 bg-transparent">
        <MDBBtn className="planet-btn w-100 bg-transparent text-white-50 d-flex justify-content-center" onClick={() => handleSummary(overview.content)}>
          <p className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">01</span>Overview</p>
        </MDBBtn>
        <MDBBtn className="planet-btn w-100 bg-transparent text-white-50 d-flex justify-content-center" onClick={() => handleSummary(structure.content)}>
          <p className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50" >02</span>Structure</p>
        </MDBBtn>
        <MDBBtn className="planet-btn w-100 bg-transparent text-white-50 d-flex justify-content-center" onClick={() => handleSummary(geology.content)}>
          <p className="planet-btn m-0 p-2"><span className="number d-xs-none text-white-50">03</span>Geology</p>
        </MDBBtn>
      </MDBBtnGroup>
      <hr className="d-sm-none" style={{borderTop: '1px solid #bbb', margin: '0'}} ></hr>
      
      <main className="d-flex flex-column align-items-center h-100">
        <section className="text-section">
          {/* IMG CONTAINER */}
          <div className="img-container m-0 w-100 d-flex justify-content-center align-items-center">
            <img src={image} className="planet-img" alt="planet" /> 
          </div>
          <div className="tablet-info">
            <div className="text-blurb">
              <h1 className="planet-name m-0">{name.toUpperCase()}</h1>
              <p className="planet-desc">{summary}</p>
              <p className="planet-source">Source: <span><a href={overview.source}>Wikipedia <img src={source} /></a></span></p>
            </div>

            {/* SUMMARY BUTTONS FOR TABLET RESPONSIVENESS */}
            <div className="btn-group-2 ">
              <button className="planet-btn " onClick={() => handleSummary(overview.content)}>
                <p className="planet-btn-text"><span className="number d-xs-none text-white-50">01</span>Overview</p>
              </button>
              <button className="planet-btn " onClick={() => handleSummary(structure.content)}>
                <p className="planet-btn-text"><span className="number d-xs-none text-white-50">02</span>Structure</p>
              </button>
              <button className="planet-btn " onClick={() => handleSummary(geology.content)}>
                <p className="planet-btn-text"><span className="number d-xs-none text-white-50">03</span>Geology</p>
              </button>
            </div>  
          </div>
        </section>
            <MDBRow className="info-grid p-4 h-0">
              <MDBCol size='md' className="grid-block-1 p-2 border border-dark gy-3">
                <p className="planet-grid-title m-0 w-100">ROTATION TIME</p>
                <h3 className="planet-grid-info m-0 w-100">{rotation}</h3>
              </MDBCol>
              <MDBCol size='md' className="grid-block-1 p-2 border border-dark gy-3">
                <p className="planet-grid-title m-0 w-100">REVOLUTION TIME</p>
                <h3 className="planet-grid-info m-0 w-100">{revolution}</h3>
              </MDBCol>
              <MDBCol size='md' className="grid-block-2 p-2 border border-dark gy-3">
                <p className="planet-grid-title m-0 w-100">RADIUS</p>
                <h3 className="planet-grid-info m-0 w-100">{radius}</h3>
              </MDBCol>
              <MDBCol size='md' className="grid-block-2 p-2 border border-dark gy-3">
                <p className="planet-grid-title m-0 w-100">AVERAGE TEMP.</p>
                <h3 className="planet-grid-info m-0 w-100">{temperature}</h3>
              </MDBCol>
            </MDBRow>
      </main>
    </>
  ) 
};

export default SinglePlanet;
