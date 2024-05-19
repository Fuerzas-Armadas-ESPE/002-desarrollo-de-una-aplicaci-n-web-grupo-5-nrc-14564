import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-row">
                <div className="footer-content">
                    <h2>INFORMACIÓN</h2>
                    <ul className="links">
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/sobre-nosotros'>Sobre Nosotros</Link></li>
                        <li><Link to='/contacto'>Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h2>REDES</h2>
                    <p>

                    </p>
                    <div className="icon">
                        <Link to="/"><FontAwesomeIcon /></Link>
                        <Link to="/"><FontAwesomeIcon /></Link>
                        <Link to="/"><FontAwesomeIcon /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;