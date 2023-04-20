import planets from "../data.json";


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

        <img src={images.planet} className="w-25 m-0" alt="planet" />

        <h1 className="planet-name">{name.toUpperCase()}</h1>
        {/* <p>{overview.content}</p> */}

      </main>
    </>
  ) 
};

export default Mercury;
