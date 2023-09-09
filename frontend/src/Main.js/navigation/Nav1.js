import React, { useState } from 'react'
import './nav.css';
import { Link, NavLink } from 'react-router-dom';
import './sidenav.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Nav1data from './Nav1data';

import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Pages/Cart';




export default function Nav1() {


  const cart = useSelector( (state) => state.cart );
  const dispatch = useDispatch();

  const totalCartPrice = cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.cartQuantity,
    0
  );

  const totalQuantity = cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.cartQuantity,
    0
  );
  

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=> setSidebar(!sidebar); 

  return (

    
    <div>
      <div className='nav1 py-4'>

      
  <div>
  <NavLink to='#' className="menu-bars">
  <FaIcons.FaBars onClick={showSidebar} />
   </NavLink>

   <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
          

               <li >
               <div className="my-4"></div>
               <Link to='#' className="menu-bar1" onClick={showSidebar} >
            <AiIcons.AiOutlineClose/>
           </Link>
             
             <div className="my-3"></div>
             <div className='input1'>
      <div className="input-group py-4 ">
     <input type="text" class="form-control" placeholder="Search..."/>
     <div class="input-group-append micon">
      <button class="btn btn-primary" id="search-button-message">
    <i className="fas fa-search "></i>
    </button>
       </div></div></div>
           {Nav1data.map((val, index)=>{
                    return(
                        
                        <div key={index} className='val.cName'>
                     <Link to={val.path} className='link1' onClick={showSidebar} >
                       
                        <span> {val.title}</span>
                        <hr />
                       
                    </Link>
                    <hr />

                    </div>
                    )
                  
                })}
               </li>
                
            
           
         
            </ul>

        </nav>
  


  <div class="search-button">
  <div class="search-icon">
    <i class="fas fa-search"></i>
  </div>
  <div class="message-box">
  <div className='input1'>
  <div className="input-group py-4 ">
  <input type="text" class="form-control" placeholder="Search..."/>
  <div class="input-group-append micon">
    <button class="btn btn-primary" id="search-button-message">
      <i className="fas fa-search "></i>
    </button>
  </div></div></div>


 
   </div></div></div>

      <div className='text-center'> <NavLink to={'/'} className='text-center'>Meeno </NavLink> </div>



      <div className='login'>
      <div className='ms-5 login1'>
      <NavLink to={'/'}>LOGIN</NavLink>
      </div>

      <div className='ms-2'>Cart /    Rs. {totalCartPrice}  </div>
      
      
     
      <div className='ms-3'>
      <div class="cart-icon">
     <NavLink to={'/cart'}><i class="fas fa-shopping-cart"></i></NavLink>
     <span class="cart-quantity"> {totalQuantity} </span>
     <div class="message-box1">
       <Cart />
     </div>
     </div>
      
      
      
      </div>
      </div>
      
      </div>
    </div>


  )
}
