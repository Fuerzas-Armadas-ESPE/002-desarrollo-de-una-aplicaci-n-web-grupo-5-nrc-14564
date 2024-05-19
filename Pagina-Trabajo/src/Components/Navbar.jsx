import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/NavBar.css'

const Navbar = () => {

    const [menuVisble, setMenuVisible] = useState(false);

    const barra = <FontAwesomeIcon icon='fa-solid fa-bars'/>

    const mostrarOcultarMenu = () => {
        setMenuVisible(!menuVisble);
    }

    const seleccionar = () => {
        setMenuVisible(false);
    }

    return (
        <section className="contenedor-header">
            <header>
                <div className="logo">
                    <a href='#'>Pollito Feliz</a>
                </div>
                <nav id="nav" className={menuVisble ? 'responsive':''}>
                    <ul>
                        <li><Link to='/' onClick={seleccionar}>Inicio</Link></li>
                        <li><Link to='/contacto' onClick={seleccionar}>Contacto</Link></li>
                        <li><Link to='/sobre-nosotros' onClick={seleccionar}>Sobre Nosotros</Link></li>
                    </ul>
                </nav>
                <div className="nav-responsive" onClick={mostrarOcultarMenu}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
