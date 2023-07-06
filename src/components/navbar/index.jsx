import React from 'react'
import c from './navbar.module.scss'
import { navlist } from '../../utils'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar'

const Navbar = () => {
  const [ active, setActive ] = React.useState(false)

  const scrollToQuaranty = () => {
    const pageWidth = window.innerWidth

    if(pageWidth >= 1440 || pageWidth <= 1440  ){
      window.scrollTo(0, 2274)
    }else if(pageWidth === 2560){
      window.scrollTo(0, 3256)
    }

  }

  const scrollToServices = () => {
    const pageWidth = window.innerWidth

    if(pageWidth <= 1440 || pageWidth >= 1440){
      window.scrollTo(0, 1142)
    }else if(pageWidth === 2560){
      window.scrollTo(0, 1485)
    }

  }

  const scrollToContacts = () => {
    window.scrollTo(0, 4762.5)
  }

  const Navigate = useNavigate()
  
  return (
    <section className={c.navbar_container}>
      <div className={c.navbar}>
        <h1 onClick={() => Navigate('/')}>
          До Границы.РУ
        </h1>
        <ul className={c.list}>
          {
            navlist.map(item => (
              <li 
                key={item.id}
                onClick={() => {
                  console.log(item.title);

                  switch (item.title.toLowerCase()) {
                    case 'о компании' :
                      scrollToQuaranty()
                      break;
                    case 'услуги' :
                      scrollToServices()
                      break;
                    case 'контакты' :
                      scrollToContacts()
                      break;
                    case 'новости' :
                      Navigate(item.path)
                      break;
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