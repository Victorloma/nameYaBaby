import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showMenu: 'main',
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setShowMenu: (state, action) => {
      state.showMenu = action.payload
    },
  },
})

export const { setShowMenu } = menuSlice.actions

export default menuSlice.reducer
