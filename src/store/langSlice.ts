import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const langSlice = createSlice({
  name: 'lanswitch',
  initialState: {
    lang: 'en',
    selectedPage: 1

  },

  reducers: {
    switchLang (state, action: PayloadAction<string>) {
      state.lang = action.payload // (action.payload ) ? action.payload : 'en'
    },
    switchPage (state, action: PayloadAction<number>) {
      state.selectedPage = action.payload
    }

  }
})

export const { switchLang, switchPage } = langSlice.actions

export default langSlice.reducer
