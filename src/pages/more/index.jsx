import React from 'react'
import c from './more.module.scss'
import { useLocation, useParams } from 'react-router-dom'
import { API } from '../../api'

const More = () => {
  const [ item, setItem ] = React.useState(null)
  const location = useParams()


  React.useEffect(() => {

    
    API.getNews() 
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              ...item
            }
          })
          const foundItem = result.find(value => value.latin.toLowerCase() === location.title.toLowerCase())
          
          setItem(foundItem)
        })
  }, [])


  return (
    <div className={c.more_container}>
      <div className={c.more}>
        <div className={c.head}>
          <img 
            src={item?.image} 
            alt="image" 
          />
        </div>
        <div className={c.body}>
          <h1>{item?.title}</h1>
          <p>{item?.desc}</p>
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