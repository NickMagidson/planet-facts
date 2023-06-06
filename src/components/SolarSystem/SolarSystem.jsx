import './solarSystem.scss'
import planets from '../../data.json'
import { Link } from 'react-router-dom'

const SolarSystem = () => {
  return (
    <>
      <div className='solar-syst'>
        <div className='sun'></div>
        {planets.map((planetName, index) => { 
          return ( 
            <Link 
              to={'/' + planetName.name} 
              className={planetName.name + '-link'}>
                <div 
                  key={index} 
                  className={!planetName.photo && planetName.name.toLowerCase()}>
                </div>
            </Link>
          )})
        }
        <div className='asteroids-belt'></div>
      </div>
    </>
  )
}

export default SolarSystem