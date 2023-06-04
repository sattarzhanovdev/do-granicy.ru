import React from 'react'
import c from './services.module.scss'
import { Components } from '..'

const Services = () => {
  const [ active, setActive ] = React.useState(false)

  return (
    <section className={c.services_container}>
      <div className={c.services}>
        <h1>
          Наши услуги
        </h1>
        <div className={c.cards}>
          <div className={c.card}>
            <h2>Такси на границу Казахстана</h2>
            <p>
              Поездка на Toyota Alphard <br />
              Оплата при посадке <br />
              Отправка ежедневно в 18.00 <br />
              Общее время поездки 34 часа
            </p>
            <button onClick={() => setActive(true)}>Заказать</button>
          </div>

          <div className={c.card}>
            <h2>Заказ минивэна</h2>
            <p>
              Заказ минивэна - это отличное решение для тех, кто едет большой компанией.Такси минивэн станет станет выгодным вариантом для поездки на дачу, вокзал, аэропорт, между городами, по России, в аэропорт, для любых междугородних путешествий.
            </p>
            <button onClick={() => setActive(true)}>Заказать</button>
          </div>

          <div className={c.card}>
            <h2>Корпоративным клиентам</h2>
            <p>
              Мы работаем и с юридическими лицами. Стоимость оговаривается индивидуально. Заберем пассажиров по указанному адресу.
            </p>
            <button onClick={() => setActive(true)}>Заказать</button>
          </div>
        </div>
      </div>

      {active ? <Components.OrderCall setActive={setActive} /> : null}
    </section>
  )
}

export default Services