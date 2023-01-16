import axios from 'axios'
import { getEnv } from '../../../../envs/envHelper'
import { refreshTokenIf401 } from '../../../Apollo/Links/Auth-Links'
// const BASE_URL = getEnv('NEST_SERVER_URL')
export const Protected_Instance = axios.create({
  timeout: 15000,
  withCredentials: true,
})

Protected_Instance.interceptors.response.use(
   (res) => {
    return res
  },
  async (err) => {
    const status = err.response?.status
    let originalRequest = err.config

    if (status === 401) {
      const _res = await refreshTokenIf401()
      console.log('RES : ' ,_res.data.data.refreshToken.message)
      if(_res.data.data.refreshToken.message) originalRequest._retry = true
      return Protected_Instance(originalRequest)
    }
  }
)
