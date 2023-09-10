import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const langSlice = createSlice({
  name: 'lanswitch',
  initialState: {
    lang: 'en',
    selectedPage: 1,
    userToken: ''
  },

  reducers: {
    switchLang (state, action: PayloadAction<string>) {
      state.lang = action.payload // (action.payload ) ? action.payload : 'en'
    },
    switchPage (state, action: PayloadAction<number>) {
      state.selectedPage = action.payload
    },
    saveUserToken (state, action: PayloadAction<string | null>) {
      if (action.payload !== null) {
        state.userToken = action.payload
      }
    }
  }
})

export const { switchLang, switchPage, saveUserToken } = langSlice.actions

export default langSlice.reducer
