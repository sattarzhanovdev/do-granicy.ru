import React from 'react'
import c from './more.module.scss'
import { useParams } from 'react-router-dom'
import { API } from '../../api'

const More = () => {
  const [ item, setItem ] = React.useState(null)
  const params = useParams()

  const latinToCyrillic = {
    A: "А", B: "Б", C: "Ц", D: "Д", E: "Е", F: "Ф", G: "Г", H: "Х", I: "И", J: "Ж", K: "К", L: "Л",
    M: "М", N: "Н", O: "О", P: "П", Q: "К", R: "Р", S: "С", T: "Т", U: "У", V: "В", W: "В", X: "Кс",
    Y: "Ы", Z: "З",
    CH: "Ч", SH: "Ш", SCH: "Щ", YO: "Ё", YA: "Я",
    YU: "Ю", ZH: "Ж", KH: "Х", TS: "Ц", TH: "З", TSIA: "ЦИЯ", TSII: "ЦИИ",
    TSIU: "ЦИЮ", TSIE: "ЦИИ", TSIIU: "ЦИЮ",
    TSY: "ЦИ", TSYU: "ЦИЮ"
  };
  

  React.useEffect(() => {
    API.getNews() 
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              ...item
            }
          })
        const foundItem = result.find(value => value.title.toLowerCase() === params.title.toLowerCase())
        
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