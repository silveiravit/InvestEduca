import axios from "axios";

// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=35d807af28b8ab7e3d9d
// https://economia.awesomeapi.com.br/json/last/SEK-BRL

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
})

export default api