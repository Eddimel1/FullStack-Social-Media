import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { combineReducers } from "redux"
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt"
import storage from "redux-persist/es/storage/session"
import { authReducer, AuthState } from "../Slices/AuthSlice"

const persistConfig = {

  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [
    encryptTransform({
      secretKey: process.env.STORAGE_SECRET,
      onError: function (error) {
        console.log(error)
      },
    }),
  ],
}

const appReducer = combineReducers({
  auth: authReducer,
})
const rootReducer = (state, action) => {
    console.log('ROOT : ' ,state , action)
    if (action.type ==='auth/logout') {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
}
type _state = {
        auth: AuthState
}
const persistedReducer = persistReducer<
_state>(persistConfig, rootReducer)  

 const store = configureStore({
devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}) 

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
