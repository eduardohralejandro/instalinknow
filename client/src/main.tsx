import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { docsApi } from './services/docs'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)
root.render(
  <Provider store={store}>
    <ApiProvider api={docsApi}>
      <App />
    </ApiProvider>
  </Provider>
)
