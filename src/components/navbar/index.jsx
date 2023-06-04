import React from 'react'
import c from './navbar.module.scss'
import { navlist } from '../../utils'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar'

const Navbar = () => {
  const [ active, setActive ] = React.useState(false)

  const scrollToQuaranty = () => {
    const pageWidth = window.innerWidth

    if(pageWidth <= 1440){
      window.scrollTo(0, 2274)
    }else if(pageWidth === 2560){
      window.scrollTo(0, 3256)
    }

  }

  const scrollToServices = () => {
    const pageWidth = window.innerWidth

    if(pageWidth <= 1440){
      window.scrollTo(0, 1142)
    }else if(pageWidth === 2560){
      window.scrollTo(0, 1485)
    }

  }

  const scrollToContacts = () => {
    window.scrollTo(0, 4762.5 )
  }

  window.onscroll = () => {
    const pageWidth = window.scrollY

    console.log(pageWidth);
  }

  return (
    <section className={c.navbar_container}>
      <div className={c.navbar}>
        <h1>
          До Границы.РУ
        </h1>
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
                  }else if(item.title.toLowerCase() === 'контакты'){
                    scrollToContacts()
                  }
                }}
              >
                {item.title}
              </li>
            ))
          }
        </ul>
        <ul className={c.number}>
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
        <ul className={c.bars}>
          <li onClick={() => setActive(true)}>
            <FaBars />
          </li>
        </ul>
      </div>

      <Sidebar 
        active={active}
        setActive={setActive}
      />
    </section>
  )
}

export default Navbar