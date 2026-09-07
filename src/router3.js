import React from 'react'   
import {BrowserRouter, NavLink, Route ,Routes} from 'react-router-dom'
import './navlink.css'
import Home from './home'
import Products from './product'
import Member from './member'

export default function Router3() {
  return(
      <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" className={({isActive})=>isActive ?"active_menu":"menu"}
        style={({isActive})=>{
            return{
                fontWeight: isActive ? "bold" : "",
            };
        }}>
            Home
        </NavLink> -&nbsp;
        <NavLink to ='/product' className={({isActive})=>isActive ?"active_menu":"menu"} > Products</NavLink>       &nbsp; 
        <NavLink to="/member" className={({isActive})=>isActive ?"active_menu":"menu"}>Member</NavLink>-&nbsp;
        <NavLink to="/contact" className={({isActive})=>isActive ?"active_menu":"menu"}>Contact us</NavLink>-&nbsp;
      </nav>
      <Routes style={{margin:'20px'}}>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/member" element={<Member/>}/>
        <Route path ="/contact" element={<div style={{textAlign:"center"}}>Contact us</div>}/>
        <Route path="/*" element={<div style={{textAlign:"center"}}>Error 404 Not Found</div>}/>
      </Routes>
      </BrowserRouter>
  )

}

