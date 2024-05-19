import React from 'react';
import '../Styles/AboutUs.css'
import Footer from './Footer'


const AboutUs = () => {
    return (
        <section className="inicio" id="inicio">
            <div className="contenedor-banner">
                <div className="banner" id="banner">
                    <div className="textos-banner">
                        <h1>SOBRE NOSOTROS</h1>
                        <p>Conoce más sobre nosotros</p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default AboutUs;