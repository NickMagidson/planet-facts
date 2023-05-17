import './solarSystem.scss'
import planets from '../../data.json'

const SolarSystem = () => {
  return (
    <>
      <div className='solar-syst'>
        <div className='sun'></div>
        {planets.map((planetName) => {return <div className={planetName.name.toLowerCase()}></div>})}
        <div className='asteroids-belt'></div>
      </div>
    </>
  )
}

export default SolarSystem