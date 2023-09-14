import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import '../src/Css/App.css'
import UserProvider from './Context/UserProvider.js'
import CommentsProvider from './Context/CommentsProvider.js'
import SneakerProvider from './Context/SneakerProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <CommentsProvider>
          <SneakerProvider>
            <App />
          </SneakerProvider>
        </CommentsProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
)
