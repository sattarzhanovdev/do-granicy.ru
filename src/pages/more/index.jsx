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
        </div>
      </div>
    </div>
  )
}

export default More