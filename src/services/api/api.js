import axios from "axios";

// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=f18e5ed01731c7e9aa73
// investeduca: https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=e2808abb288d729c7fb4

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
})

export default api