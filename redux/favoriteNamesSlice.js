import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteNames: [],
}

export const favoriteNamesSlice = createSlice({
  name: 'favoriteNames',
  initialState,
  reducers: {
    setFavoriteNames: (state, action) => {
      state.favoriteNames = action.payload
    },
  },
})

export const { setFavoriteNames } = favoriteNamesSlice.actions

export default favoriteNamesSlice.reducer
