import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./Tailwind.css"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
)
