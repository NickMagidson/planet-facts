import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" />
        <Route path='mercury' element={<Mercury/>} />
        <Route path='Venus' element={<Venus/>} />
      </Routes>
    </>
  )
}

export default App
