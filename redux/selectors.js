import { createSelector } from '@reduxjs/toolkit'

export const selectGender = createSelector(
  (state) => state.gender.showGender,
  (gender) => gender
)

export const selectNamecard = createSelector(
  (state) => state.namecard.showNamecard,
  (namecard) => namecard
)

export const selectMenu = createSelector(
  (state) => state.menu.showMenu,
  (menu) => menu
)
