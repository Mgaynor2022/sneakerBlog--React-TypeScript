import React, {useContext} from 'react'
import { UserContext } from './Context/UserProvider'
import PublicPage from './Components/PublicPage'
import SidebarPage from './Components/SidebarPage'
import KobeDisplay from './Components/KobeDisplay'
import Auth from './Components/Auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import PrivateRoute from './Components/PrivateRoute'
import JordanSidebar from './Components/JordanSidebar'
import ContentDisplay from './Components/ContentDisplay'

function App() {
const {token, logout, kobeSneakers, comments} =  useContext(UserContext)
  return (
    
    <div id='container'>
      <div id="navbar">
        {token && <Navbar logout={logout} />}
      </div>
      <Routes>
          <Route path='/'
            element={token ? <Navigate to="/PublicPage"/> : <Auth  />} >
          </Route>

          <Route path='/PublicPage'
            element={<PrivateRoute token={token} redirectTo="/" >

            <KobeDisplay/>
            <JordanSidebar/>
            <PublicPage />
            <ContentDisplay />
      <footer>Footer</footer>
          </PrivateRoute>}>
          {/* <Route path="/SidebarPage" element={<SidebarPage {...kobeSneakers} />}/> */}
        </Route>

        <Route path='/SidebarPage'
            element={<PrivateRoute token={token} redirectTo="/" >
            <SidebarPage  {...kobeSneakers} {...comments}/>
          </PrivateRoute>}>
        </Route>
          
      </Routes>
    </div>
    
    
    
  )
}

export default App
