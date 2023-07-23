import { configureStore } from '@reduxjs/toolkit'
import { nameApi } from './features/api/nameApi'
import genderReducer from './genderSlice'
import namecardReducer from './namecardSlice'
import favoriteNamesReducer from './favoriteNamesSlice'

export const store = configureStore({
  reducer: {
    [nameApi.reducerPath]: nameApi.reducer,
    gender: genderReducer,
    namecard: namecardReducer,
    favoriteNames: favoriteNamesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nameApi.middleware),
})
