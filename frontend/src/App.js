
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route , Routes } from 'react-router-dom'

import Cart from './Main.js/Pages/Cart';
import NotFound from './Main.js/Pages/NotFound'
import Home from './Main.js/Home';
import { ToastContainer } from 'react-toastify';
import Header from './Main.js/navigation/Header';




function App() {
  return (
    <div>
    <BrowserRouter>
    <ToastContainer/>
        <Header/>
      <Routes>
      <Route path='/cart' exact element = {<Cart/>} />
      <Route path='/*' element = {<NotFound/>} />
      <Route path='/' exact element = {<Home/>} />
      
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;

