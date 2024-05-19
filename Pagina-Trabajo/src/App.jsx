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
}

export default App;
