import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { store } from './app/store'
import { theme } from './theme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
)
