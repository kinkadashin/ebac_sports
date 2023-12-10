import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import reducerCart from './reducers/carrinho'
import reducerFavorite from './reducers/favorito'

export const store = configureStore({
  reducer: {
    cart: reducerCart,
    favorite: reducerFavorite,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
