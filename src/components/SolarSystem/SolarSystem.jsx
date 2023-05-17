import './solarSystem.scss'
import planets from '../../data.json'

const SolarSystem = () => {
  return (
    <>
      <div className='solar-syst'>

        {/* {planets.map((planetName) => {
          return <div className={'.' + `${planetName.name.toLowerCase}`}></div>
        })} */}

        <div className='.sun'></div>
        <div className='.mercury'></div>
        <div className='venus'></div>
        <div className='earth'></div>
        <div className='mars'></div>
        <div className='jupiter'></div>
        <div className='saturn'></div>
        <div className='uranus'></div>
        <div className='neptune'></div>
        <div className='asteroids-belt'></div>
      </div>
    </>
  )
}

export default SolarSystem