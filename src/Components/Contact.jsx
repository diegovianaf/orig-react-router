import React from 'react'
import style from './Contact.module.css'
import photo from '../img/contact.jpg'
import Head from './Head'

const Contact = () => {
  return (
    <section className={`${style.contact} animeLeft`}>
      <Head title='Ranek | Contact' description='Contact Us' />
      <img src={photo} alt="Typewriter" />
      <div>
        <h1>Contact Us.</h1>
        <ul className={style.data}>
          <li>contact@email.com</li>
          <li>99999-9999</li>
          <li>Some street, 435</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
