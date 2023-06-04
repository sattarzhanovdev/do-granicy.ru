import React from 'react'
import c from './sidebar.module.scss'
import { navlist } from '../../utils'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Sidebar = ({active, setActive}) => {

  const scrollToQuaranty = () => {
    const pageWidth = window.innerWidth

    if(pageWidth >= 768){
      window.scrollTo(0, 3127)
    }else{
      window.scrollTo(0, 3645)
    }
  }

  const scrollToServices = () => {
    const pageWidth = window.innerWidth

    if(pageWidth >= 768){
      window.scrollTo(0, 1522)
    }else{
      window.scrollTo(0, 1491)
    }

  }

  const scrollToContacts = () => {
    window.scrollTo(0, 6480.5)
  }

  return (
    <div className={active ? c.sidebar : c.sidebar_none}>
      <div className={c.close}>
        <li onClick={() => setActive(false)}>
          <AiOutlineClose />
        </li>
      </div>
      <h3>До Границы.РУ</h3>
      <ul className={c.list}>
        {
          navlist.map(item => (
            <li 
              key={item.id} 
              onClick={() => {
                if(item.title.toLowerCase() === 'о компании'){
                  scrollToQuaranty()
                }else if(item.title.toLowerCase() === 'услуги'){
                  scrollToServices()
                }else{
                  scrollToContacts()
                }
                setActive(false)
              }}
            >
              {item.title}
            </li>
          ))
        }
      </ul>

      <ul>
        <li> 
          <Link to={'tel:+79266731110'}>
            +7 (926)-673-11-10
          </Link>
        </li>
        <li> 
          <Link to={'tel:+79996920861'}>
            +7 (999)-692-08-61
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar