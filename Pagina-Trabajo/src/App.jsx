import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Formulario from './Components/Formulario';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="/contacto" element={<Formulario />} />
                <Route path="/sobre-nosotros" element={<AboutUs />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
