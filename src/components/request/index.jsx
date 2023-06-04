import React from 'react'
import c from './request.module.scss'
import { useForm } from 'react-hook-form'

const Request = () => {
  const [ error, setError ] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  const handleSend = (data) => {
    reset()
    setError(true)
    console.log(data);
  }

  return (
    <section className={c.request_container}>
      <div className={c.request}>
        <h1>
          Отправьте нам заявку прямо сейчас и <br />
          узнайте стоимость поездки!
        </h1>
        <p>
          Оставьте заявку и <br />
          мы свяжемся с вами в течение 10 минут!
        </p>
        <form onSubmit={handleSubmit(data => handleSend(data))}>
          <div>
            <label>
              Имя
            </label>
            <input  
              type="text"
              {...register('name')}
            />
            <p>ㅤ</p>
          </div>
          <div>
            <label>
              Телефон <span>*</span>
            </label>
            <input  
              type="text"
              {...register('phone_number')}
            />
            <p>{error ? 'Это поле нужно заполнить' : 'ㅤ'}</p>
          </div>
          <div>
            <label>
              Гражданство
            </label>
            <input  
              type="text"
              {...register('nationality')}
            />
            <p>ㅤ</p>
          </div>
          <div>
            <button>
              Отправить 
            </button>
            <p>ㅤ</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Request