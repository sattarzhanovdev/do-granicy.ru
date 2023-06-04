import React from 'react'
import c from './steps.module.scss'
import { Components } from '..'

const Steps = () => {
  const [ active, setActive ] = React.useState(false)

  return (
    <section className={c.steps_container}>
      <div className={c.steps}>
        <div className={c.step}>
          <div className={c.title}>
            <div>1</div>
            <h3>Оставьте заявку</h3>
          </div>
          <p>
            Оставите в заявке свои данные
          </p>
          <button onClick={() => setActive(true)}>
            Заполнить форму
          </button>
        </div>
        <span></span>
        <div className={c.step}>
          <div className={c.title}>
            <div>2</div>
            <h3>Мы позвоним</h3>
          </div>
          <p>
            Наш менеджер свяжется с вами и уточнит детали
          </p>
        </div>
        <span></span>
        <div className={c.step}>
          <div className={c.title}>
            <div>3</div>
            <h3>Встреча</h3>
          </div>
          <p>
            Встречаетесь с водителем и распологаетесь в автомобиле
          </p>
        </div>
      </div>

      {active ? <Components.OrderCall setActive={setActive}/> : null}
    </section>
  )
}

export default Steps
