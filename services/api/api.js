import axios from "axios";

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=19aae28063acb0c5a2c2

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
})

export default api