import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'
import './i18n'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
