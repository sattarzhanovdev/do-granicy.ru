import React from 'react'
import c from './more.module.scss'
import { useParams } from 'react-router-dom'
import { API } from '../../api'

const More = () => {
  const [ item, setItem ] = React.useState(null)
  const params = useParams()


  const latinToCyrillic = {
    a: "а", b: "б", c: "ц", d: "д", e: "е", f: "ф", g: "г", h: "х", i: "и", j: "ж", k: "к", l: "л",
    m: "м", n: "н", o: "о", p: "п", q: "к", r: "р", s: "с", t: "т", u: "у", v: "в", w: "в", x: "кс",
    y: "ы", z: "з",
    A: "А", B: "Б", C: "Ц", D: "Д", E: "Е", F: "Ф", G: "Г", H: "Х", I: "И", J: "Ж", K: "К", L: "Л",
    M: "М", N: "Н", O: "О", P: "П", Q: "К", R: "Р", S: "С", T: "Т", U: "У", V: "В", W: "В", X: "Кс",
    Y: "Ы", Z: "З"
  }
  

  React.useEffect(() => {
    const text = params.title.replace(/[a-zA-Z]/g, match => latinToCyrillic[match] || match);
    API.getNews() 
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              ...item
            }
          })
          const foundItem = result.find(value => value.latin.toLowerCase() === text.toLowerCase())
          
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