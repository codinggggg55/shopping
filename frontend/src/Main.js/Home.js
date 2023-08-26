import React from 'react'
import { productsApi, useGetAllProductsQuery } from './Features/ProductsApi'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './Features/cartSlice';
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
   const navigate = useNavigate();

  const handleAddToCart = (product) =>{
  dispatch(addToCart(product));
  navigate('/cart');
     
  }
  return (
    <HomeCss>
    <div className='home-container container mt-5 '>
      {isLoading ? <div class="text-center">
      <div class="spinner-grow" role="status">
        <span class="sr-only"></span>
      </div>
    </div> : error ? <p>An error occured</p> :
     <>
     
     
     <h2 className='text-center mb-2'>New Arrival</h2>
     <div className='products'>
     {data?.map(product => <div key={product.id} className='product' >
     <h3> {productsApi.name} </h3>
     <img src={product.image}  alt={product.name}  className='ms-4 ' />
     <h5 className="mt-3 text-center"> {product.name} </h5>
     <div className="details text-center">
     <span className=""> {product.desc} </span> <span>$ {product.price}</span>
     </div>

    <NavLink to={'/cart'} className="btn btn-primary text-center ms-4 mt-3 button1" onClick={()=> handleAddToCart(product) } >Add to Cart</NavLink>
  


      
      
      
   
      
      
      </div> )}
      </div>
     
     
   
     
     
     
     </>
  
  
  
  
  }
    </div>
    </HomeCss>
  )
}

const HomeCss = styled.div `
.home-container{
 padding:2rem 4rem;
}
.products{
   display: flex;

   flex-wrap:wrap;
   margin-top:2rem
   justify-content: space-between;
}
.product{
  width: calc(33.33% - 1rem);
  
  max-width:100%;
  height:400px;
 
  margin: 1rem auto;
  border-radius:15px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 2px 2px 5px rgba(94, 104, 121, 0.3);

}



.product img{
  width:80%;
  margin-top:1rem;
  margin-left:auto;
  margin-right:auto;
 
}

.button1{
  
  width:80%
}


@media screen and (max-width: 768px) {

  .home-container{
    padding:0rem;
   }
  .product {
    width: calc(50% - 1rem); /* On smaller screens, make each product occupy the full width */
    margin: 0.2rem; /* Adjusted margin for better spacing */
max-width: 100%;

  }
}

`



