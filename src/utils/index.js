import { FaUserLock, FaRegStar, FaWallet, FaRegHandshake } from 'react-icons/fa'
import { MdSecurity, MdOutlineLocationOn } from 'react-icons/md'

export const navlist = [
  {id: 1, title: 'о компании', path: '/about/'},
  {id: 2, title: 'услуги', path: '/services/'},
  {id: 3, title: 'контакты', path: '/contacts/'},
  {id: 4, title: 'новости', path: '/news/'},
]

export const quarantylist = [
  {id: 1, title: 'Гарантия и Качество 100%', desc: 'Поддержка на всем пути следования! Отвезем до границы и обратно без каких либо проблем !', icon: <FaUserLock />},
  {id: 2, title: 'Легко и Уверенно', desc: 'Пересечь границу и вернутся обратно максимально быстро! Приехали-Прошли-Уехали!', icon: <FaRegStar />},
  {id: 3, title: 'Лучшая цена', desc: 'Работаем без посредников Без скрытых доплат и расходов! Оплата при посадке в автомобиль!', icon: <FaWallet />},
  {id: 4, title: 'Надежно и комфортно', desc: 'Опытные Водители! Свежие и комфортные авто бизнес класса!', icon: <MdSecurity />},
  {id: 5, title: 'Нам доверяют', desc: 'К нам приходят по личным рекомендациям постоянных заказчиков! Новые клиенты всегда довольны поездкой на границу и обратно!', icon: <FaRegHandshake />},
  {id: 6, title: 'Ежедневный выезд', desc: 'Поездка на границу в день обращения! Выезд из Москвы (М. Дубровка) с 19:00-21:00', icon: <MdOutlineLocationOn />}
]

export const slidelist = [
  {
    id: 1, 
    title: 'Долго искали, нашли здесь!', 
    desc: '"Нужно было сделать новую миграционную карту, стал искать варианты. Обратился в эту компанию по рекомендациям. Все прошло безупречно и быстро. Проблем никаких не возникло. Огромное спасибо за помощь"',
    img: 'https://m-files.cdnvideo.ru/lpfile/1/2/e/12e67388db4058a019591402dcc3fefd/-/resize/100/f.jpeg?40420492',
    name: 'Владислав Макаров'
  },
  {
    id: 2, 
    title: 'Лучший сервис, который мы видели!', 
    desc: 'Столкнулась с вопросом получения новой миграционной карты. Поискала, знакомые посоветовали вашу компанию. Поехала на границу Украины в Белгород. Все документы получила без проблем, поездка прошла спокойно - все хорошо. Спасибо.',
    img: 'https://m-files.cdnvideo.ru/lpfile/0/c/7/0c795e5fec87c495a263ef2e5546ef5c/-/resize/100/f.jpeg?4751124',
    name: 'Инна Ивановна'
  },
  {
    id: 2, 
    title: 'Качественные услуги', 
    desc: '"Благодаря этой компании без проблем доехала до границы и обратно. Переживала, но благодаря качественной работе компании все прошло успешно. В пути все было хорошо, не дорого и удобно. Помогли обновить миграционную карту , объяснили как заполнять. Машина была приличная, на которой ехали. Все очень комфортно.',
    img: 'https://m-files.cdnvideo.ru/lpfile/b/1/3/b131f71cf2ec0aad25fe2e5013609a65/-/resize/100/f.jpeg',
    name: 'Алтынай Саматова'
  },
]