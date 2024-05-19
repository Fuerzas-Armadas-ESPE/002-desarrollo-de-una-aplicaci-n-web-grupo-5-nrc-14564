import React from 'react';
import '../Styles/AboutUs.css'

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="container">
                <h1 className="title">Sobre La Página</h1>
                <p className="description">
                Elegimos la temática de un restaurante para realizar esta página web 
                porque los restaurantes son negocios que dependen en gran medida de la 
                visibilidad y la accesibilidad para atraer y retener clientes. Una página web 
                bien diseñada permite a los restaurantes mostrar su menú, compartir su historia 
                y filosofía, y facilitar las reservas en línea. Además, en un mundo digital, 
                una presencia en línea profesional es esencial para competir en el mercado gastronómico, 
                permitiendo a los clientes potenciales encontrar rápidamente información relevante 
                y actualizada sobre el restaurante.
                </p>
                <h1 className="title">¿POR QUÉ EN REACT?</h1>
                <p className="description">
                Optamos por utilizar React junto con Vite para desarrollar esta página web debido 
                a las ventajas significativas que ofrece esta combinación de tecnologías. 
                React es una biblioteca de JavaScript altamente eficiente y flexible, que facilita 
                la creación de interfaces de usuario interactivas y dinámicas. Vite, por otro lado, 
                es una herramienta de construcción rápida y moderna que optimiza el proceso de desarrollo 
                con una configuración mínima y tiempos de compilación extremadamente rápidos. Al utilizar 
                React y Vite, podemos asegurar que la página web del restaurante sea no solo visualmente 
                atractiva y fácil de usar, sino también rápida y eficiente, mejorando la experiencia del 
                usuario y optimizando el rendimiento en todas las plataformas.
                </p>    
            </div>
        </section>
    );
};

export default AboutUs;