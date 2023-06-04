import React from 'react'
import c from './call.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

const OrderCall = ({setActive}) => {
  return (
    <div className={c.call_container}>
      <div className={c.call}>
        <div className={c.close}>
          <li onClick={() => setActive(false)}>
            <AiOutlineClose />
          </li>
        </div>
        <h2>Заказать звонок</h2>
        <div>
          <input
            type="text"
            placeholder='Телефон'
          />
          <p>Должен начинаться на +7</p>
        </div>
        <button>
          Отправить
        </button>
      </div>
    </div>
  )
}

export default OrderCall