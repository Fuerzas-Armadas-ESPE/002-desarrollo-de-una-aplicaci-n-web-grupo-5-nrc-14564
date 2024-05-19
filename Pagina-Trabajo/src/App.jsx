<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Form/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario></Formulario>      
    </>
  )
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';

const Home = () => <h2>Home</h2>;
const Contacto = () => <h2>Contacto</h2>;


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/sobre-nosotros" element={<AboutUs />} />
            </Routes>
        </Router>
    );
>>>>>>> c6b1f07770554de8c301e536660db6500c40cfce
}

export default App;
