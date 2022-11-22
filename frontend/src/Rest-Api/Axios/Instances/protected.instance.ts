import axios from 'axios'
import { getEnv } from '../../../../envs/envHelper'
// const BASE_URL = getEnv('NEST_SERVER_URL')
export const Protected_Instance = axios.create({
  timeout: 10000,
  withCredentials: true,
})

// Protected_Instance.interceptors.response.use(async (res)=>{
//     if(res.data.errors[0].message = "Unauthorized"){
//         res.status = 401
//     }
//     console.log(res)
//     console.log(res.data.errors[0].message)
//     return res
// },(err) =>{
//     console.log(err)
// })
