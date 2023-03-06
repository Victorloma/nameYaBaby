import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showNamecard: 'show',
}

export const namecardSlice = createSlice({
  name: 'namecard',
  initialState,
  reducers: {
    setShowNamecard: (state, action) => {
      state.showNamecard = action.payload
    },
  },
})

export const { setShowNamecard } = namecardSlice.actions

export default namecardSlice.reducer
