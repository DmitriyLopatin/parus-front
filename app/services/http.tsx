import axios from "axios";

 const BASE_URL = 'https://89.219.33.242/'


 const axiosInstance = axios.create({
    baseURL: `${BASE_URL}api/v1`,
    headers: {
        'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
      },
 
 })
 export default axiosInstance

