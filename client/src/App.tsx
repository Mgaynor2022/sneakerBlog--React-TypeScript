import {useContext} from 'react'
import { UserContext } from './Context/UserProvider'
import PublicPage from './Components/Pages/PublicPage'
import SidebarPage from './Components/Pages/SidebarPage'
import KobeDisplay from './Components/Cards/KobeDisplay'
import Auth from './Components/Auth/Auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import '../src/Css/App.css'
import Navbar from './Components/Navbar'
import PrivateRoute from './Components/PrivateRoute'
import JordanSidebar from './Components/Cards/JordanSidebar'
import ContentDisplay from './Components/Cards/ContentDisplay'
import PopularSneakersPage from './Components/Pages/PopularSneakersPage'
import Footer from './Components/Footer'
import NikePage from './Components/Pages/NikePage'
import JordanPage from './Components/Pages/JordanPage'


function App() {
const {token, logout } =  useContext(UserContext)

  return (
    <>
    <div id="navbar">
        {token && <Navbar logout={logout} />}
      </div>
        <div id='container' className=" ">
      <Routes>
          <Route path='/'
          element={token ? <Navigate to="/PublicPage"/> : <Auth  />}
             >
       
          </Route>

          <Route path='/PublicPage'
            element={<PrivateRoute token={token} redirectTo="/" >
              {/* <Carousel /> */}
            <KobeDisplay/>
            <JordanSidebar/>
            <PublicPage />
            <ContentDisplay />
            <Footer />
          </PrivateRoute>}>
              
        </Route>

        <Route path='/SidebarPage'
            element={<PrivateRoute token={token} redirectTo="/" >
            <SidebarPage/>
            <Footer />
          </PrivateRoute>}>
        </Route>

        <Route path='/JordanPage'
            element={<PrivateRoute token={token} redirectTo="/" >
            <JordanPage />
            <Footer />
          </PrivateRoute>}>
        </Route>
        
          <Route path='/PopularSneakersCard/brands/:click'
            element={<PrivateRoute token={token}  redirectTo="/" >
            <NikePage/>
            <Footer />
          </PrivateRoute>}>
        </Route>

        <Route path='/PopularSneakersPage/:id'
            element={<PrivateRoute token={token}  redirectTo="/" >
            <PopularSneakersPage />
            <Footer />
          </PrivateRoute>}>
        </Route>
          
      </Routes>
      
    </div>
    </>
    //PopularSneakersCard

    
    
    
    
  )
}

export default App
