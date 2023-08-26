import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';



function Header() {
  return (
    <NavbarCss>
    <nav className="navbar navbar-expand-lg navbar-dark mx-auto">
    <NavLink className="navbar-brand  text-primary" to={'/'}>Your Brand </NavLink>
    <NavLink className="navbar-brand  text-primary" to={'/cart'} > Cart <span>1</span> </NavLink>
    
</nav>


    
    </NavbarCss>
   
  )
}

const NavbarCss = styled.div`



        

`

export default Header
