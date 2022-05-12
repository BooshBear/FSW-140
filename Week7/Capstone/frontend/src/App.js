import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUps from './components/signUps';

function App() {
  return (
    <div className="mt-10">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignUps' element={<SignUps/>}/>
      </Routes>
    </div>
  );
}

export default App;
