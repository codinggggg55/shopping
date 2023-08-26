import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector( (state) => state.cart );
  const totalCartPrice = cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.cartQuantity,
    0
  );
  const totalQuantity = cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.cartQuantity,
    0
  );
  return (
    <div   className='cart-container'>
    <h2 className='text-center py-5'>Shopping Cart</h2>
    { cart.cartItems.length === 0 ? <div   className='cart-empty'>
    <h4 className='text-center'>Your cart is currently empty</h4>
    <div   className='start-shopping text-center'>
    <NavLink to={'/'}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
   </svg>
   <span>Start Shopping</span>
    </NavLink>
    </div> 
    
    </div> : 
    ( <div>
    
      
      <div   className='cart-items container py-3'>
      
      {cart.cartItems?.map( cartItem => ( <div   className='cart-item' key={cartItem.id}>
      
      <div   className='cart-product'>
      <div  className="card rounded-3 mb-4">
      <div  className="card-body p-4">
        <div  className="row d-flex justify-content-between align-items-center">
          <div  className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={cartItem.image}
               className="img-fluid rounded-3" alt={cartItem.name}/>
          </div>
          <div  className="col-md-3 col-lg-3 col-xl-3">
            <p  className="lead fw-normal mb-2"> {cartItem.name} </p>
            <p><span  className="text-muted">Size: </span> {cartItem.desc} </p>
          </div>
          <div  className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button  className="btn btn-link px-2">
              <i  className="fas fa-minus"></i>
            </button>
             
            <div className='count'>{cartItem.cartQuantity} </div>
           

            <button  className="btn btn-link px-2">
              <i  className="fas fa-plus"></i>
            </button>
          </div>

          <div  className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5  className="mb-0"> ${cartItem.price} &nbsp; $ {cartItem.price * cartItem.cartQuantity} </h5>
          </div>
          <div  className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!"  className="text-danger"><i  className="fas fa-trash fa-lg"></i></a>
          </div>
         
        </div>
      </div>
    </div>
      
      <div>
      
      

      </div>
      
      </div>
     
      <div></div> 
      </div>

      
      

      ))}
      <div className='container  '>
      <div className='row justify-content-end'>
      <div className='col-md-4 '>
      <div className='card mb-4  '>
          <div className=" summary ps-4 py-3 ">
          <h5 className="mb-0">Summary</h5>
        </div>
        <div className="card-body summary">
          <ul className="list-group list-group-flush summary">
            <li
              className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              <div>
                <strong>Product Quantity</strong>
                <span></span>
              </div>
              <span><strong> {totalQuantity}</strong></span>

              
              
            </li>
          
            <li
            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Subtotal amount</strong>
              <span></span>
            </div>
            <span><strong>${cart.cartTotalAmount} </strong></span>
          </li>

            <li
              className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <span></span>
              </div>
              <span><strong> ${totalCartPrice}</strong></span>
            </li>
            <p>Taxes and shipping calculated at checkout</p>
          </ul>

          <button type="button" className="btn  btn-lg btn-block clear">
            Clear Cart
          </button>

          <button type="button" className="btn btn-primary btn-lg btn-block">
            Go to checkout
          </button>
        </div>

        
      </div>
      </div>
      </div>
      
      </div>

      <div   className='continue-shopping'>
      <NavLink to={'/'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  className="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
       </svg>
      <span>Continue Shopping</span>
      </NavLink>
      </div> 
       

    
      
      
      </div>
      
      
      
      
      </div>)}
      
    </div>
  )
}
