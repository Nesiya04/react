
 /* import Web from './webpage';
import './web.css' */
import {BrowserRouter, Route, Routes} from 'react-router-dom';



import Navbar from "./navbar";

import DarkVariantExample from "./carousel";

import Women from "./container";
import Men from "./men";

import Kids from "./kids";



import Myweb2 from "./about";
import Footer from "./footer";
import CartCard from "./beauty";
import Marquee1 from "./marquee";
import ContactForm from "./contact";
import { Home } from 'lucide-react';
import Login from './login';







function App() {
  return (

       /* <Web/>  */
   

   <BrowserRouter>
<Navbar/>  
   
   <Routes>
    <Route path='/' element={
   
   <>
    

      <DarkVariantExample/> 

      <Marquee1/>
      <Women/>
      <Men/>

      
      <Kids/>
      

      <CartCard/>

      <Myweb2/>
      <ContactForm/>
    <Footer brandName="Aurelia"  email="happyshopy@gmail.comm" />
    
    
    
    
</>
    }/>
    <Route path='' element={<Home/>}/>
    <Route path='/men' element={<Men/>}/>
    <Route path='/kids' element={<Kids/>}/>
<Route path='/container' element={<Women/>}/>

<Route path='/beauty' element={<CartCard/>}/>
<Route path='/contact' element={<ContactForm/>}/>
<Route path='/login' element={<Login/>}/>

</Routes>

   </BrowserRouter>

   

      );
}

export default App;                                                                               

