import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav2 = () => {
  return (
    <>
    <Navcss>
    <div className=''>
       <ul className=' nav2 text-center'>
      <li><NavLink to={'/'} className='home'>Home</NavLink></li> <span></span>
      <li><NavLink to={'/'}>About Us</NavLink></li>
      <li><NavLink to={'/services'} >Services</NavLink></li>
     
      <li><NavLink to={'/'}>Study</NavLink></li>
      <li><NavLink to={'/ielts'}>Ielts</NavLink></li>
      <li><NavLink to={'/'}>PTE Login</NavLink></li>

      <li><NavLink to={'/success'}>Success</NavLink></li>
      <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    
       
    </ul>
    </div>
    </Navcss>


    </>

  )
}

const Navcss = styled.div`

.nav2{display:flex; justify-content:; align-items:center; background-color:rgb(184, 179, 179); height:50px; padding:1rem; margin-bottom:0rem; }
 .nav2 li{font-size:1rem; font-weight:700;  list-style:none;   }
 .home{margin-left:8rem;}
 .nav2 a{text-decoration:none; color:white; padding-right:1rem;   }
 .nav2 a:hover{color:#f5b300}


 
 
 @media (max-width:1140px){
  .nav2{display:none}
 }


`

export default Nav2
