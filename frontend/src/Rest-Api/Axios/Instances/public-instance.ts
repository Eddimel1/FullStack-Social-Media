import axios from 'axios'
import { getEnv } from '../../../../envs/envHelper'

const BASE_URL = process.env.NEST_SERVER_URL
export const Public_Instance = axios.create({baseURL:BASE_URL,timeout:10000})

