import { configureStore } from '@reduxjs/toolkit'
import { nameApi } from './features/api/nameApi'
import genderReducer from './genderSlice'
import namecardReducer from './namecardSlice'
import favoriteNamesReducer from './favoriteNamesSlice'
import { profileApi } from './features/api/profileApi'

export const store = configureStore({
  reducer: {
    [nameApi.reducerPath]: nameApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    gender: genderReducer,
    namecard: namecardReducer,
    favoriteNames: favoriteNamesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(nameApi.middleware)
      .concat(profileApi.middleware),
})
