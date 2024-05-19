import React from 'react'
import Footer from './Footer'
import '../Styles/Form.css'

function Formulario() {
  return (
    <section className='Form'>
      <label className='Form__label'>Nombre</label>
      <input className='Form__input' type="text" />
      <label className='Form__label'>Apellido</label>
      <input className='Form__input' type="text" />
      <label className='Form__label'>Email</label>
      <input className='Form__input' type="email" />
      <section className='section__selector'>
        <label className='Form__label'>Motivo</label>
        <select className='Form__select' name="motivos" id="motivos">
          <option value="consulta">Consulta</option>
          <option value="reclamo">Reclamo</option>
          <option value="sugerencia">Sugerencia</option>
        </select>
      </section>
      <label className='Form__label'>Mensaje</label>
      <textarea className='Form__text-area' name="mensaje" id="mensaje" placeholder="Escribe aquí"></textarea>
      <button className='Form__button'>Enviar</button>
    </section>
  )
}

export default Formulario
