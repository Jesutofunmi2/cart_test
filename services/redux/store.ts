import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartSlice from './features/cartItemSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: sessionStorage,
}

const rootReducer = combineReducers({
  cart: cartSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export let persistor = persistStore(store)