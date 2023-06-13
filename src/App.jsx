import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AstroPhoto from './components/AstroPhoto/AstroPhoto';
import SinglePlanet from './components/Planets/SinglePlanet';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path='mercury' element={<SinglePlanet planetIndex={0} key={1} />} />
        <Route path='venus' element={<SinglePlanet planetIndex={1} key={2}/>} />
        <Route path='earth' element={<SinglePlanet planetIndex={2} key={3}/>} />
        <Route path='mars' element={<SinglePlanet planetIndex={3} key={4} />} />
        <Route path='jupiter' element={<SinglePlanet planetIndex={4} key={5} />} />
        <Route path='saturn' element={<SinglePlanet planetIndex={5} key={6} />} />
        <Route path='uranus' element={<SinglePlanet planetIndex={6} key={7} />} />
        <Route path='neptune' element={<SinglePlanet planetIndex={7} key={8} />} />
        <Route path='daily' element={<AstroPhoto/>} />
      </Routes>
    </>
  )
}

export default App
