import React from 'react'
import c from './more.module.scss'

const More = () => {
  const item = JSON.parse(localStorage.getItem('moreNew'))
  
  return (
    <div className={c.more_container}>
      <div className={c.more}>
        <div className={c.head}>
          <img src={item.image} alt="" />
        </div>
        <div className={c.body}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <div className={c.more_info}>
            {
              item?.themes?.map((value, i) => (
                <div key={i}>
                  <h4>{value.topic}</h4>
                  <p>{value.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default More