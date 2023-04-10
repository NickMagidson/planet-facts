import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mercury from './components/Mercury';
import Venus from './components/Venus';

function App() {


  return (
    <>

      {/* Navbar Component goes here */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" />
          <Route path='mercury' element={<Mercury/>} />
          <Route path='Venus' element={<Venus/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
