import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
<<<<<<< HEAD
import Formulario from './Components/Formulario';
import Navbar from './Components/Navbar';
=======
import Navbar from './Components/Navbar'; 
import Formulario from './Components/Formulario';
>>>>>>> b337507d88175b80802bb7d5bbbe9d2ea01993ad

const Home = () => <h2>Home</h2>;

function App() {
    return (
    <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Formulario />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        </Routes>
    </Router>
    );
}

export default App;
