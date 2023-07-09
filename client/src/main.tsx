import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './App.css'
import UserProvider from './Context/UserProvider.js'
import CommentsProvider from './Context/CommentsProvider.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <CommentsProvider>
          
          <App />

        </CommentsProvider>
      </UserProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
