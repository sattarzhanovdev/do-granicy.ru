import React from 'react'
import c from './slide.module.scss'
import { AiFillStar } from 'react-icons/ai'

const Slide = ({id, title, desc, img, name}) => {
  return (
    <div className={c.slide} key={id}>
      <h3>{title}</h3>
      <p>{desc}</p>

      <div className={c.user}>
        <div className={c.left}>
          <img src={img} alt="avatar" />
        </div>
        <div className={c.right}>
          <h3>{name}</h3>
          <div className={c.rate}>
            <li>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide