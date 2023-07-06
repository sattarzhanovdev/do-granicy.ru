import React from 'react'
import c from './banner.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const Banner = () => {

  const Navigate = useNavigate()

  return (
    <section className={c.banner_container}>
      <div className={c.banner}>
        <div className={c.left}>
          <h1>
            Такси До Границы Казахстана!
          </h1>
          <p>
            Осуществляем комфортные и безопасные поездкина границу Казахстана! Свяжитесь с нами!
            8 926-673-11-10 
          </p>
          <h2>
            Для Граждан Казахстана, Азербайджана, Таджикистана, Кыргызстана, Узбекистана, Армении, Украины,Молдовы, ДНР, ЛНР. 
          </h2>
          <div className={c.btns}>
            <Link to={'tel:+79266731110'}>
              <button>
                Позвонить
              </button>
            </Link>
            <div>
              <Link to={'https://api.whatsapp.com/send?phone=79266731110'}>
                <button>
                  Whatsapp
                </button>
              </Link>
              <Link to={'https://telegram.me/+79266731110'}>
                <button>
                  Telegram
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={c.right}>
          
        </div>
      </div>
    </section>
  )
}

export default Banner