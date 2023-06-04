import React from 'react'
import c from './contact.module.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className={c.contact_container}>
      <div className={c.contact}>
        <h1>Свяжитесь с Нами!</h1>
        <div className={c.btns}>
          <Link to={'https://api.whatsapp.com/send?phone=79266731110'}>
            <button>Написать в WhatsApp</button>
          </Link>
          <Link to={'https://telegram.me/+79266731110'}>
            <button>Написать в Telegram</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact