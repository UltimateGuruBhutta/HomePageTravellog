import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import Activities from './components/Activities';
import Booking from './components/Booking';



function App() {
  return (
     <>
     <TopBar/> 
     <NavBar/>
     <Hero/>
     <Activities/>
     <Booking/>
     
     </>
  );
}

export default App;
