import axios from "axios";

// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=f18e5ed01731c7e9aa73
// https://economia.awesomeapi.com.br/json/last/SEK-BRL

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
})

export default api