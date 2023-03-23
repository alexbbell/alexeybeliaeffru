import { createSlice } from '@reduxjs/toolkit'

import wdata from '../../public/wordconstants.json'

const langSlice = createSlice({
  name: 'lanswitch',
  initialState: {
    lang: 'en',
    selectedPage: {
      selectedPage: 1
    },
    words: wdata
  },

  reducers: {
    switchLang (state, action) {
      state.lang = action.payload
    },
    switchPage (state, action) {
      state.selectedPage = action.payload
    },
    loadWords (state, action) {
      state.words = action.payload
    }

  }
})

export const { switchLang, switchPage, loadWords } = langSlice.actions

export default langSlice.reducer
