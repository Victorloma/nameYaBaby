import { configureStore } from '@reduxjs/toolkit'
import { nameApi } from './features/api/apiSlice'
import genderReducer from './genderSlice'
import namecardReducer from './namecardSlice'

export const store = configureStore({
  reducer: {
    [nameApi.reducerPath]: nameApi.reducer,
    gender: genderReducer,
    namecard: namecardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nameApi.middleware),
})
