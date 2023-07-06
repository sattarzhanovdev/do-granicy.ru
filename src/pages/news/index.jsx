import React from 'react'
import c from './news.module.scss'
import { API } from '../../api'
import { useNavigate } from 'react-router-dom'

const News = () => {
  const [ news, setNews ] = React.useState(null)

  React.useEffect(() => {
    API.getNews() 
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              ...item
            }
          })

        setNews(result)
      })
  }, [])

  const Navigate = useNavigate()

  return (
    <div className={c.container}>
      <h2>Новости</h2>
      <div className={c.cards}>
        {
          news?.length !== 0 ?
          news?.map((item, i) => (
            <div class={c.post} key={i}>
              <div class={c.header_post}>
                <img src={item.image} alt="" />
              </div>

              <div class={c.body_post}>
                  <div class={c.post_content}>

                      <h1>{item.title}</h1>
                      <p>
                        {item.desc}
                      </p>
                  </div>
                  <div className={c.footer_post}>
                    <button
                      onClick={() => {
                        localStorage.setItem('moreNew', JSON.stringify(item))
                        Navigate('/more/')
                      }}
                    >
                      Подробнее
                    </button>
                  </div>
              </div>
            </div>
          ))
          :
          <h2>Новостей нету</h2>
        }
      </div>
    </div>
  )
}

export default News