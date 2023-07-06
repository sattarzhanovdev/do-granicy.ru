import axios from "axios";

export const API = {
  getNews: () => axios.get('https://do-granicy-default-rtdb.asia-southeast1.firebasedatabase.app/news.json')
}