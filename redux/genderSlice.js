import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showGender: '*',
}

export const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    setShowGender: (state, action) => {
      state.showGender = action.payload
    },
  },
})

export const { setShowGender } = genderSlice.actions

export default genderSlice.reducer
