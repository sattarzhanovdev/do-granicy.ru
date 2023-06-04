import React from 'react'
import c from './contacts.module.scss'
import { Link } from 'react-router-dom'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const Contacts = () => {
  return (
    <section className={c.contacts_container}>
      <div className={c.contacts}>
        <div style={{position:'relative', overflow:'hidden'}}>
          <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute', top:0}}>
            Москва
          </a>
          <a href="https://yandex.ru/maps/213/moscow/?ll=37.676861%2C55.718050&utm_medium=mapframe&utm_source=maps&z=18.67" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>
            Москва — Яндекс Карты
          </a>
          <iframe src="https://yandex.ru/map-widget/v1/?ll=37.676861%2C55.718050&z=18.67" height="600" frameborder="1" allowfullscreen="true" style={{position:'relative'}}></iframe>
          <div className={c.contacts_block}>
            <h1>Контакты</h1>
            <li>
              <Link to={'tel:+79266731110'}>
                +7 (926) 673-11-10
              </Link>
            </li>
            <li>
              <Link to={'tel:+79996920861'}>
                +7 (999) 692-08-61
              </Link>
            </li>
            <p>Москва, м.Дубровка 1 выход</p>
            <div className={c.btns}>
              <Link to={'https://telegram.me/+79266731110'}>
                <button>
                  <FaTelegram />
                </button>
              </Link>
              <Link to={'https://api.whatsapp.com/send?phone=79266731110'}>
                <button>
                  <FaWhatsapp />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts