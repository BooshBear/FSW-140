import React from 'react'
import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUps from './components/signUps';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignUps' element={<SignUps/>}/>
      </Routes>
    </div>
  );
}

export default App;
