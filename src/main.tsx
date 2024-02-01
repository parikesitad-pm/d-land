import App from './App'
import AuthProvider from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from './lib/react-query/QueryProvider'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
)
