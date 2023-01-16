import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { roles } from '../../Routes/Types'
import { login_TH } from '../Thunks/Auth/LogIn'

// Define a type for the slice state
export interface AuthState {
  user: {
    id: number | null
    role: roles | null
    username: string | null
    avatar: {
      url: string
    }
  }
  loading: boolean
  error: string | null
  loggedIn: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
  user: { id: null, role: null, username: null, avatar: { url: '' } },
  loggedIn: false,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<{ login: any }>) => {
      state.user = action.payload.login
      state.loggedIn = true
    },
    logout: (state) => {
      state.user = null
      state.loggedIn = false
    },
    updateAvatar: (state, action: PayloadAction<{ avatar: any }>) => {
      console.log('ACTION : ', action)
      state.user.avatar = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login_TH.pending, (state, action) => {
        state.loading = true
      })
      .addCase(login_TH.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.loggedIn = true
      })
      .addCase(login_TH.rejected, (state, action) => {
        ;(state.user = null), (state.loading = false)
        state.loggedIn = false
        state.error = action.payload as any
      })
  },
})
export default authSlice
export const authReducer = authSlice.reducer
export const { loggedIn, logout, updateAvatar } = authSlice.actions
