import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg';
import { AboutPage, HomPage, UserPage } from "../pages";
export const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <div className="main-layout">
<nav>
    <img src={logo} alt="react logo"></img>
    <ul>
    <li><NavLink to="/" className={({isActive})=> isActive ? 'nav-active' : ''}>Home</NavLink></li>
    <li><NavLink to="/about"className={({isActive})=> isActive ? 'nav-active' : ''}>About</NavLink></li>
    <li><NavLink to="/users"className={({isActive})=> isActive ? 'nav-active' : ''}>Users</NavLink></li>
 
</ul>
</nav>
 <Routes>
    <Route path="/"   element={<HomPage></HomPage>}></Route>
    <Route path="about"element={<AboutPage></AboutPage>}></Route>
    <Route path="users"element={<UserPage></UserPage>}></Route>
    <Route path="/*"element={<Navigate to="/"></Navigate>}></Route>
   </Routes>
    </div>
  
    </BrowserRouter>
    </>
  )
}
