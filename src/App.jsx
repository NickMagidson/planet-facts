import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AstroPhoto from './components/AstroPhoto/AstroPhoto';
import { 
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from './components';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        {/* Line below: For refactoring the app to dynamically render planet components */}
        {/* <Route path='mercury' element={<SinglePlanet planet={planet[0]} />} /> */}
        <Route path='mercury' element={<Mercury />} />
        <Route path='venus' element={<Venus/>} />
        <Route path='earth' element={<Earth/>} />
        <Route path='mars' element={<Mars/>} />
        <Route path='jupiter' element={<Jupiter/>} />
        <Route path='saturn' element={<Saturn/>} />
        <Route path='uranus' element={<Uranus/>} />
        <Route path='neptune' element={<Neptune/>} />
        <Route path='daily' element={<AstroPhoto/>} />
      </Routes>
    </>
  )
}

export default App
