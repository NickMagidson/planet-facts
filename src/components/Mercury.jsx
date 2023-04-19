import planets from "../data.json";


console.log(planets)

// const mercury = planets[0];

const { name, images, rotation, revolution, radius, temperature } = planets[0]

// fetch(data)
// .then(response => response.json())
// .then(data => console.log(data))

const Mercury = () => {
  return (
    <>

      {/* Try routing! */}
      {/* mercury.overview */}
      {/* mercury.structure */}

      <h1>{name}</h1>
      <img src={images.planet} alt="planet" /> 
      {/* Svg wont pull from json file. Work to resolve this 
      before pulling straight from the directory on src */}

    </>
  ) 
};

export default Mercury;
