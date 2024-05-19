import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Formulario from './Components/Formulario';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

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
            <Footer />
        </Router>
    );
}

export default App;
