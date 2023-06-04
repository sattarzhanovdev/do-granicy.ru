import React from 'react'
import c from './quaranty.module.scss'
import { quarantylist } from '../../utils'

const Quaranty = () => {
  return (
    <section className={c.quaranty_container}>
      <div className={c.quaranty}>
        <h1>Наша гарантия</h1>
        <div className={c.cards}>
          {
            quarantylist.map(item => (
              <div className={c.card} key={item.id}>
                <div className={c.icon}>
                  <li>
                    {item.icon}
                  </li>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc.length > 100 ? `${item.desc.slice(0, 100)}...` : item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Quaranty