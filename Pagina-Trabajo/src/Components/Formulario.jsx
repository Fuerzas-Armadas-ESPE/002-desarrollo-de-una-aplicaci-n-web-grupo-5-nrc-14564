import React, { useRef } from 'react'
import '../Styles/Form.css'
import emailjs from '@emailjs/browser'

function Formulario() {

  const refForm = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceId = 'service_wh09s7a'
    const templateId = 'template_ykm07k7'

    const apiKeys = 'NSOxKYhRfkuh7wp_8'

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKeys)
      .then(result => console.log(result.text))
      .catch(error => console.log(error.text))
  }

  return (
    <form className='Form' ref={refForm} action="" onSubmit={handleSubmit}>
      <fieldset className='field-name'>
        <label className='Form__label'>Nombre</label>
        <input className='Form__input' type="text" name='username' />
      </fieldset>
      <fieldset className='field-apellido'>
        <label className='Form__label'>Apellido</label>
        <input className='Form__input' type="text" name='lastname' />
      </fieldset>
      <fieldset className='field-email'>
        <label className='Form__label'>Email</label>
        <input className='Form__input' type="email" name='email'/>
      </fieldset>
      <fieldset className='field-select'>
        <section className='section__selector'>
          <label className='Form__label'>Motivo</label>
          <select className='Form__select' name="motivos" id="motivos">
            <option value="consulta">Consulta</option>
            <option value="reclamo">Reclamo</option>
            <option value="sugerencia">Sugerencia</option>
          </select>
        </section>
      </fieldset>
      <fieldset className='field-message'>
        <label className='Form__label'>Mensaje</label>
        <textarea className='Form__text-area' name="message" id="message" placeholder="Escribe aquí"></textarea>
      </fieldset>
      <button className='Form__button'>Enviar</button>
    </form>
  )
}

export default Formulario
